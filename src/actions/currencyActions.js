export const GET_CURRENCY = 'GET CurrencyS'
export const GET_CURRENCY_SUCCESS = 'GET_Currency_SUCCESS'
export const GET_CURRENCY_FAILURE = 'GET_Currency_FAILURE'

export const getCurrency = () => ({ type: GET_CURRENCY })
export const getCurrencySuccess = Currency => ({
  type: GET_CURRENCY_SUCCESS,
  payload: Currency,
})
export const getCurrencyFailure = () => ({ type: GET_CURRENCY_FAILURE })

export function fetchCurrency(id) {
  return async dispatch => {
    dispatch(getCurrency())

    try {
      const response = await fetch(
        // `https://jsonplaceholder.typicode.com/Currencys/${id}`
      )
      const data = await response.json()

      dispatch(getCurrencySuccess(data))
    } catch (error) {
      dispatch(getCurrencyFailure())
    }
  }
}
