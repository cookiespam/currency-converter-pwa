import * as actions from '../actions/currencyActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  currency: {},
}

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CURRENCY:
      return { ...state, loading: true }
    case actions.GET_CURRENCY_SUCCESS:
      return { ...state, currency: action.payload, loading: false, hasErrors: false }
    case actions.GET_CURRENCY_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
