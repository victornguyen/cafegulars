import { filter } from 'lodash';

import * as types from 'constants/ActionTypes';

const initialState = [
    {
        id: 1,
        name: 'Reggie Jackson',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0,
        justAdded: false
    },
    {
        id: 2,
        name: 'Stephen Curry',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0,
        justAdded: false
    },
    {
        id: 3,
        name: 'Steve Nash',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0,
        justAdded: false
    }
]

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
    return state.map(regular =>
        regular.id === id ?
            Object.assign({}, regular, updates) :
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

    case types.MARK_AS_ADDED:
        return updateRegular(state, action.id, { justAdded: false });

    default:
        return state;
  }
}
