var AppDispatcher       = require('../dispatcher/dispatcher');
var RegularConstants    = require('../constants/regular_constants');

var RegularActions = {

    addPerson(person) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.ADD_PERSON,
            person: person
        });
    },

    removePerson(id) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.REMOVE_PERSON,
            id: id
        });
    },

    addCup(id) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.ADD_CUP,
            id: id
        });
    },

    addFreeCup(id) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.ADD_FREECUP,
            id: id
        });
    },

    updateName(id, name) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.UPDATE_NAME,
            id: id,
            name: name
        });
    },

    updateOrder(id, order) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.UPDATE_ORDER,
            id: id,
            order: order
        });
    },

    updateSugar(id, sugar) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.UPDATE_SUGAR,
            id: id,
            sugar: sugar
        });
    },

    updateStrength(id, strength) {
        AppDispatcher.dispatch({
            actionType: RegularConstants.UPDATE_STRENGTH,
            id: id,
            strength: strength
        });
    }

}

module.exports = RegularActions;
