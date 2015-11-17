import { filter, find, cloneDeep, assign, map } from 'lodash';
import * as types from 'constants/ActionTypes';
import initialState from 'data/peeps';

function createRegular(id) {
    return {
      id: id,
      name: '',
      order: '',
      sugar: 0,
      strength: 'Normal',
      count: 0,
      purchased: 0,
      free: 0,
      justAdded: true
    }
}

function getRegular(state, id) {
    return cloneDeep( find(state, regular => regular.id === id) );
}

function updateRegular(state, id, updates) {
    return map(state, regular =>
        regular.id === id ?
            assign({}, regular, updates) :
            regular
    );
}

export default function regulars(state = initialState, action) {
  switch (action.type) {
    case types.ADD_REGULAR:
        return [...state, createRegular(action.id)];

    case types.REMOVE_REGULAR:
        return state.filter(r => r.id !== action.id);

    case types.CLEAR_REGULARS:
        return [];

    case types.UPDATE_NAME:
        return updateRegular(state, action.id, { name: action.name });

    case types.UPDATE_ORDER:
        return updateRegular(state, action.id, { order: action.order });

    case types.UPDATE_SUGAR:
        return updateRegular(state, action.id, { sugar: action.sugar });

    case types.UPDATE_STRENGTH:
        return updateRegular(state, action.id, { strength: action.strength });

    case types.ADD_CUP:
        const regular = getRegular(state, action.id);
        return updateRegular(state, action.id, {
            count: regular.count + 1,
            purchased: regular.purchased + 1
        });

    case types.ADD_FREECUP:
        return updateRegular(state, action.id, {
            count: 0,
            free: getRegular(state, action.id).free + 1
        });

    case types.MARK_AS_ADDED:
        return updateRegular(state, action.id, { justAdded: false });

    default:
        return state;
  }
}
