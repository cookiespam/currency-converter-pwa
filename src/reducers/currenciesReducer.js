import * as actions from '../actions/currenciesActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  currencies: [],
  selectedCurrencies: [],
  tableData: []
}

export default function currenciesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CURRENCIES:
      return { ...state, loading: true }
    case actions.GET_CURRENCIES_SUCCESS:
      return { ...state, currencies: action.payload, loading: false, hasErrors: false }
    case actions.GET_CURRENCIES_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.GET_SELECTED_CURRENCIES:
      return { ...state, selectedCurrencies: action.payload }
    case actions.SET_SELECTED_CURRENCIES:
      return { ...state, selectedCurrencies: action.payload }
    case actions.CHANGE_RATE:
      return { ...state, selectedCurrencies: action.payload }
    case actions.GET_TABLE_DATA:
      return { ...state, tableData: action.payload }
    default:
      return state
  }
}