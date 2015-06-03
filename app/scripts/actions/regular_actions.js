var AppDispatcher   = require('../dispatcher/dispatcher');

var RegularActions = {

    addPerson(person) {
        AppDispatcher.handleAction({
            actionType: 'ADD_PERSON',
            data: { person: person }
        });
    },

    removePerson(id) {
        AppDispatcher.handleAction({
            actionType: 'REMOVE_PERSON',
            data: { id: id }
        });
    },

    addCup(id) {
        AppDispatcher.handleAction({
            actionType: 'ADD_CUP',
            data: { id: id }
        });
    },

    addFreeCup(id) {
        AppDispatcher.handleAction({
            actionType: 'ADD_FREECUP',
            data: { id: id }
        });
    },

    updateName(id, name) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_NAME',
            data: { id: id, name: name }
        });
    },

    updateOrder(id, order) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_ORDER',
            data: { id: id, order: order }
        });
    },

    updateSugar(id, sugar) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_SUGAR',
            data: { id: id, sugar: sugar }
        });
    },

    updateStrength(id, strength) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_STRENGTH',
            data: { id: id, strength: strength }
        });
    }

}

module.exports = RegularActions;
