'use strict';

import AppDispatcher      from 'dispatcher/dispatcher';
import RegularConstants   from 'constants/regular_constants';

const RegularActions = {

    addPerson() {
        AppDispatcher.dispatch({
            actionType: RegularConstants.ADD_PERSON
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

};

module.exports = RegularActions;
