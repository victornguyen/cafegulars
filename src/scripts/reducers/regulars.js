import { filter, assign, map } from 'lodash';
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
        return [createRegular(action.id), ...state];

    case types.REMOVE_REGULAR:
        return filter(state, r => r.id !== action.id);

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
        return updateRegular(state, action.id, {
            count: action.count,
            purchased: action.count
        });

    case types.ADD_FREECUP:
        return updateRegular(state, action.id, {
            count: 0,
            free: action.free
        });

    case types.MARK_AS_ADDED:
        return updateRegular(state, action.id, { justAdded: false });

    default:
        return state;
  }
}
