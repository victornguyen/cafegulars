var AppDispatcher   = require('../dispatcher/dispatcher');

var RegularActions = {

    addPerson(person) {
        AppDispatcher.dispatch({
            actionType: 'ADD_PERSON',
            person: person
        });
    },

    removePerson(id) {
        AppDispatcher.dispatch({
            actionType: 'REMOVE_PERSON',
            id: id
        });
    },

    addCup(id) {
        AppDispatcher.dispatch({
            actionType: 'ADD_CUP',
            id: id
        });
    },

    addFreeCup(id) {
        AppDispatcher.dispatch({
            actionType: 'ADD_FREECUP',
            id: id
        });
    },

    updateName(id, name) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_NAME',
            id: id,
            name: name
        });
    },

    updateOrder(id, order) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_ORDER',
            id: id,
            order: order
        });
    },

    updateSugar(id, sugar) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_SUGAR',
            id: id,
            sugar: sugar
        });
    },

    updateStrength(id, strength) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_STRENGTH',
            id: id,
            strength: strength
        });
    }

}

module.exports = RegularActions;
