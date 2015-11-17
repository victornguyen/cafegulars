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

export function markAsAdded(id) {
    return { type: types.MARK_AS_ADDED, id };
}
