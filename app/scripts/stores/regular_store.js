'use strict';

var AppDispatcher   = require('../dispatcher/dispatcher');
var EventEmitter    = require('events');
var _               = require('lodash');

const MOCK_DATA     = require('../peeps.json');

var _store = {
    peeps: MOCK_DATA
};

// if ( localStorage['cafegulars'] ) {
//     let _storedPeeps = JSON.parse( localStorage['cafegulars'] ).peeps;
//     _store.peeps = _storedPeeps && _storedPeeps.length ? _storedPeeps : MOCK_DATA;
// }


// TODO: use module for this?
var _generateId = function () {
    // https://gist.github.com/gordonbrander/2230317
    return '_' + Math.random().toString(36).substr(2, 9);
};

var _addPerson = function(person) {
    person.dateAdded    = new Date().toISOString();
    person.id           = _generateId();
    _store.peeps.unshift(person);
};

var _removePerson = function(id) {
    _.remove(_store.peeps, person => person.id === id);
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

        default:
            return true;

    }
});

module.exports = RegularStore;
