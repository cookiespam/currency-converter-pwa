import { Views } from '../actions'

export const initialState = {
  view: Views.HOME
}

export default function viewReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, view: action.view }
    default:
      return state
  }
}