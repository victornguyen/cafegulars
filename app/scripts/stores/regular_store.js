'use strict';

var AppDispatcher   = require('../dispatcher/dispatcher');
var EventEmitter    = require('events');
var _               = require('lodash');

const MOCK_DATA     = require('../peeps.json');

const LOCALSTORAGE_KEY = 'cafegulars';

var _store = {
    peeps: MOCK_DATA
};

if ( localStorage[LOCALSTORAGE_KEY] ) {
    let _storedPeeps = JSON.parse( localStorage[LOCALSTORAGE_KEY] );
    _store.peeps = _storedPeeps && _storedPeeps.length ? _storedPeeps : MOCK_DATA;
}


// TODO: use module for this?
var _generateId = function () {
    // https://gist.github.com/gordonbrander/2230317
    return '_' + Math.random().toString(36).substr(2, 9);
};

var _addPerson = function(person) {
    person.dateAdded    = new Date().toISOString();
    person.id           = _generateId();
    _store.peeps.unshift(person);
    _saveStore();
};

var _removePerson = function(id) {
    _.remove(_store.peeps, person => person.id === id);
    _saveStore();
};

var _updateName = function(data) {
    var personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].name = data.name;
    _saveStore();
};

var _updateSugar = function(data) {
    var personIndex = _.findIndex(_store.peeps, { id: data.id });
    _store.peeps[personIndex].order.sugar = data.sugarCount;
    _saveStore();
};

var _saveStore = function() {
    localStorage[LOCALSTORAGE_KEY] = JSON.stringify(_store.peeps);
};

var RegularStore = _.assign({}, EventEmitter.prototype, {
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
    var action = payload.action;

    switch (action.actionType) {

        case 'ADD_PERSON':
            _addPerson(action.data);
            RegularStore.emit('change');
            break;

        case 'REMOVE_PERSON':
            _removePerson(action.data);
            RegularStore.emit('change');
            break;

        case 'UPDATE_NAME':
            _updateName(action.data)
            RegularStore.emit('change');
            break;

        case 'UPDATE_SUGAR':
            _updateSugar(action.data)
            RegularStore.emit('change');
            break;

        default:
            return true;

    }
});

module.exports = RegularStore;
