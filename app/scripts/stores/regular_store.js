'use strict';

let AppDispatcher   = require('../dispatcher/dispatcher');
let EventEmitter    = require('events');
let _               = require('lodash');

const MOCK_DATA         = require('../peeps.json');
const LOCALSTORAGE_KEY  = 'cafegulars';

let _store = {
    peeps: MOCK_DATA
};

if ( localStorage[LOCALSTORAGE_KEY] ) {
    let _storedPeeps = JSON.parse( localStorage[LOCALSTORAGE_KEY] );
    _store.peeps = _storedPeeps && _storedPeeps.length ? _storedPeeps : MOCK_DATA;
}


// TODO: use module for this?
let _generateId = function () {
    // https://gist.github.com/gordonbrander/2230317
    return '_' + Math.random().toString(36).substr(2, 9);
};

let _addPerson = function(person) {
    person.dateAdded    = new Date().toISOString();
    person.id           = _generateId();
    _store.peeps.unshift(person);
    _saveStore();
};

let _removePerson = function(id) {
    _.remove(_store.peeps, person => person.id === id);
    _saveStore();
};

let _addCup = function(id) {
    let personIndex = _.findIndex(_store.peeps, { id: id });
    _store.peeps[personIndex].coffees.count++;
    _store.peeps[personIndex].coffees.purchased++;
    _saveStore();
};

let _addFreeCup = function(id) {
    let personIndex = _.findIndex(_store.peeps, { id: id });
    _store.peeps[personIndex].coffees.count = 0;
    _store.peeps[personIndex].coffees.free++;
    _saveStore();
};

let _updateName = function(data) {
    let personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].name = data.name;
    _saveStore();
};

let _updateOrder = function(data) {
    let personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].order.type = data.order;
    _saveStore();
};

let _updateSugar = function(data) {
    let personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].order.sugar = data.sugarCount;
    _saveStore();
};

let _updateStrength = function(data) {
    let personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].order.strength = data.strength;
    _saveStore();
};

let _saveStore = function() {
    localStorage[LOCALSTORAGE_KEY] = JSON.stringify(_store.peeps);
};

let RegularStore = _.assign({}, EventEmitter.prototype, {
    addChangeListener(fn) {
        this.on('change', fn);
    },

    removeChangeListener(fn) {
        this.removeListener('change', fn);
    },

    getPeeps() {
        return _store.peeps;
    }
});


AppDispatcher.register(payload => {
    let action = payload.action;

    switch (action.actionType) {

        case 'ADD_PERSON':
            _addPerson(action.data);
            RegularStore.emit('change');
            break;

        case 'REMOVE_PERSON':
            _removePerson(action.data);
            RegularStore.emit('change');
            break;

        case 'ADD_CUP':
            _addCup(action.data)
            RegularStore.emit('change');
            break;

        case 'ADD_FREECUP':
            _addFreeCup(action.data)
            RegularStore.emit('change');
            break;

        case 'UPDATE_NAME':
            _updateName(action.data)
            RegularStore.emit('change');
            break;

        case 'UPDATE_ORDER':
            _updateOrder(action.data)
            RegularStore.emit('change');
            break;

        case 'UPDATE_SUGAR':
            _updateSugar(action.data)
            RegularStore.emit('change');
            break;

        case 'UPDATE_STRENGTH':
            _updateStrength(action.data)
            RegularStore.emit('change');
            break;

        default:
            return true;

    }
});

module.exports = RegularStore;
