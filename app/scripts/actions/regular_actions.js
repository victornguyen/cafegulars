var AppDispatcher   = require('../dispatcher/dispatcher');

var RegularActions = {

    addPerson(person) {
        AppDispatcher.handleAction({
            actionType: 'ADD_PERSON',
            data: person
        });
    },

    removePerson(id) {
        AppDispatcher.handleAction({
            actionType: 'REMOVE_PERSON',
            data: id
        });
    },

    updateName(id, name) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_NAME',
            data: { id: id, name: name }
        });
    },

    updateSugar(id, sugarCount) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_SUGAR',
            data: { id: id, sugarCount: sugarCount }
        });
    }

}

module.exports = RegularActions;
