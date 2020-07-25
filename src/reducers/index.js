import { combineReducers } from 'redux';

import currenciesReducer from './currenciesReducer'
import currencyReducer from './currencyReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  currencies: currenciesReducer,
  views: viewReducer
})

export default rootReducer
