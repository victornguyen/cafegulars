import { filter } from 'lodash';

import { ADD_REGULAR, REMOVE_REGULAR, CLEAR_REGULARS } from 'constants/ActionTypes';

const initialState = [
    {
        id: 1,
        name: 'Reggie Jackson',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0
    },
    {
        id: 2,
        name: 'Stephen Curry',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0
    },
    {
        id: 3,
        name: 'Steve Nash',
        order: '',
        sugar: 0,
        strength: 'Normal',
        count: 0,
        purchased: 0,
        free: 0
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
      free: 0
    }
}

export default function regulars(state = initialState, action) {
  switch (action.type) {
    case ADD_REGULAR:
        return [...state, createRegular(action.id)];

    case REMOVE_REGULAR:
        return state.filter(r => r.id !== action.id);

    case CLEAR_REGULARS:
        return [];

    default:
        return state;
  }
}
