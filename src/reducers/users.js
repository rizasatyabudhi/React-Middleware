import { FETCH_USERS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      // Take the existing state, concat the new list of users from action.payload
      return [...state, ...action.payload];
  }
  return state;
}
