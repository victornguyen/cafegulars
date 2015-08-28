'use strict';

import AppDispatcher      from 'dispatcher/dispatcher';
import RegularConstants   from 'constants/regular_constants';
import EventEmitter       from 'events';
import _                  from 'lodash';

const LOCALSTORAGE_KEY  = 'cafegulars';
const CHANGE_EVENT      = 'change';

const NEW_PERSON_OBJECT = {
    id: null,
    name: '',
    order: {
        type: null,
        sugar: 0,
        strength: 'Normal',
        notes: ''
    },
    coffees: {
        count: 0,
        purchased: 0,
        free: 0
    },
    lastVisited: null,
    dateAdded: null
};

let peeps = [];

if ( localStorage[LOCALSTORAGE_KEY] ) {
    peeps = JSON.parse( localStorage[LOCALSTORAGE_KEY] );
}


/**
 * Generate a "unique" id for a person
 * https://gist.github.com/gordonbrander/2230317
 * @return {String}
 */
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}


/**
 * Get a person by id
 * @param  {String} id
 * @return {Object}
 */
function getPerson(id) {
    let index = _.findIndex(peeps, { id: id });
    return peeps[index];
}


/**
 * Create a person
 * @param  {Object} person An object containing person data from AddRegular
 */
function create(person) {
    person.id           = generateId();
    person.dateAdded    = new Date().toISOString();
    peeps.unshift(person);
}


/**
 * Update a person
 * @param  {String} id
 * @param  {Object} updates An object literal with new data to merge in
 */
function update(id, updates) {
    _.merge(getPerson(id), updates);
}

/**
 * Delete a person
 * @param  {String} id
 */
function remove(id) {
    _.remove(peeps, person => person.id === id);
}


/**
 * Increment counter and purchased coffee count for a person
 * @param {String} id
 */
function addCup(id) {
    let person = getPerson(id);
    update(id, {
        coffees: {
            count: person.coffees.count + 1,
            purchased: person.coffees.purchased + 1
        }
    });
}


/**
 * Increment free coffee count and reset counter for a person
 * @param {String} id
 */
function addFreeCup(id) {
    let person = getPerson(id);
    update(id, {
        coffees: {
            count: 0,
            free: person.coffees.free + 1
        }
    });
}


/**
 * Save peeps to localStorage
 */
function saveStore() {
    localStorage[LOCALSTORAGE_KEY] = JSON.stringify(peeps);
}


let RegularStore = _.assign({}, EventEmitter.prototype, {
    /**
     * @param {Function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param  {Function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange() {
        saveStore();
        this.emit(CHANGE_EVENT);
    },

    /**
     * Return all Regulars
     * @return {Array}
     */
    getPeeps() {
        return peeps;
    },

    /**
     * Returns copy of NEW_PERSON_OBJECT
     * @return {Object}
     */
    getNewPerson() {
        return _.cloneDeep(NEW_PERSON_OBJECT);
    }
});


AppDispatcher.register(action => {

    switch (action.actionType) {

        case RegularConstants.ADD_PERSON:
            create(action.person);
            RegularStore.emitChange();
            break;

        case RegularConstants.REMOVE_PERSON:
            remove(action.id);
            RegularStore.emitChange();
            break;

        case RegularConstants.ADD_CUP:
            addCup(action.id);
            RegularStore.emitChange();
            break;

        case RegularConstants.ADD_FREECUP:
            addFreeCup(action.id);
            RegularStore.emitChange();
            break;

        case RegularConstants.UPDATE_NAME:
            update(action.id, {
                name: action.name
            });
            RegularStore.emitChange();
            break;

        case RegularConstants.UPDATE_ORDER:
            update(action.id, {
                order: {
                    type: action.order
                }
            });
            RegularStore.emitChange();
            break;

        case RegularConstants.UPDATE_SUGAR:
            update(action.id, {
                order: {
                    sugar: action.sugar
                }
            });
            RegularStore.emitChange();
            break;

        case RegularConstants.UPDATE_STRENGTH:
            update(action.id, {
                order: {
                    strength: action.strength
                }
            });
            RegularStore.emitChange();
            break;

        default:
            return true;

    }
});

module.exports = RegularStore;
