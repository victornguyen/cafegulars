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
    }

}

module.exports = RegularActions;
