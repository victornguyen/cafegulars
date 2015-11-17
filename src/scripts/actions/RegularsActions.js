import * as types from 'constants/ActionTypes.js';
import { generateId } from 'utils/RegularUtils';

export function addRegular() {
    return { type: types.ADD_REGULAR, id: generateId() };
}

export function removeRegular(id) {
    return { type: types.REMOVE_REGULAR, id };
}

export function clearRegulars() {
    return { type: types.CLEAR_REGULARS };
}

export function updateName(id, name) {
    return { type: types.UPDATE_NAME, id, name };
}

export function updateOrder(id, order) {
    return { type: types.UPDATE_ORDER, id, order };
}

export function updateSugar(id, sugar) {
    return { type: types.UPDATE_SUGAR, id, sugar };
}

export function updateStrength(id, strength) {
    return { type: types.UPDATE_STRENGTH, id, strength };
}

export function addCup(id, count) {
    return { type: types.ADD_CUP, id, count };
}

export function addFreeCup(id, free) {
    return { type: types.ADD_FREECUP, id, free };
}

export function markAsAdded(id) {
    return { type: types.MARK_AS_ADDED, id };
}
