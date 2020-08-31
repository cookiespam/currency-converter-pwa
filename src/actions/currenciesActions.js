import CurrencyConverter from '../services/CurrencyConverter';

export const GET_CURRENCIES = 'GET_CURRENCIES'
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS'
export const GET_CURRENCIES_FAILURE = 'GET_CURRENCIES_FAILURE'
export const GET_SELECTED_CURRENCIES = 'GET_SELECTED_CURRENCIES'
export const SET_SELECTED_CURRENCIES = 'SET_SELECTED_CURRENCIES'
export const CHANGE_RATE = 'CHANGE_RATE'
export const GET_TABLE_DATA = 'GET_TABLE_DATA'

export const getCurrencies = () => ({ type: GET_CURRENCIES })
export const getCurrenciesSuccess = currencies => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: currencies,
})
export const getCurrenciesFailure = () => ({ type: GET_CURRENCIES_FAILURE })

export const getSelectedCurrencies = selectedCurrencies => ({
  type: GET_SELECTED_CURRENCIES,
  payload: selectedCurrencies,
})

export const setSelectedCurrencies = selectedCurrencies => ({
  type: SET_SELECTED_CURRENCIES,
  payload: selectedCurrencies,
})

export const getTableData = data => ({
  type: GET_TABLE_DATA,
  payload: data,
})

export const changeRate = selectedCurrencies => ({
  type: CHANGE_RATE,
  payload: selectedCurrencies,
})

export function fetchCurrencies() {
  return async dispatch => {
    dispatch(getCurrencies())

    try {
      const cache = await CurrencyConverter.getOfflineData();
      dispatch(getCurrenciesSuccess(cache))
      const data = await CurrencyConverter.updateRates();
      dispatch(getCurrenciesSuccess(data))
    } catch (error) {
      dispatch(getCurrenciesFailure())
    }
  }
}

export function fetchSelectedCurrencies(rates) {
  return async dispatch => {
    const data = await CurrencyConverter.getSelectedCurrencies(rates);
    dispatch(getSelectedCurrencies(data))
  }
}

export function fetchTableData(rates) {
  return async dispatch => {
    const selected = await CurrencyConverter.getSelectedCurrencies(rates);
    for(let d of rates) {
      for(let s of selected) {
          if(d.id === s.id) {
              d.tableData = { checked: true }
          } 
      }
    }
    dispatch(getTableData(rates))
  }
}

export function updateSelectedCurrencies(data) {
  return async dispatch => {
    await CurrencyConverter.setSelectedCurrencies(data);
    dispatch(setSelectedCurrencies(data))
  }
}


export function changeRates(rates, selected, currencyId, amount) {
  return async dispatch => {
    const data = CurrencyConverter.change(rates, selected, currencyId, amount);
    dispatch(changeRate(data))
  }
}