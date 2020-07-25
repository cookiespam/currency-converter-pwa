import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import CurrencyRow from './CurrencyRow';
import { fetchSelectedCurrencies, changeRates } from '../actions/currenciesActions';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 24
    }
}));

function Home({ dispatch, selected, rates}) {
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchSelectedCurrencies(rates));
      }, [dispatch, rates])

    const renderCurrencyRows = () => {
        if (typeof selected !== 'object' || selected.length === 0) return;

        return selected.map(currency =>
            <CurrencyRow key={currency.id} currency={currency} change={change}></CurrencyRow>
        );
    }

    const change = (currencyId, amount) => {
        if (isNaN(amount)) { return; }
  
        const newSelected = [...selected];
        dispatch(changeRates(rates, newSelected, currencyId, amount));
    };

    return (
        <div className={classes.root}>
            {renderCurrencyRows()}
        </div>
    );
}

const mapStateToProps = state => ({
    selected: state.currencies.selectedCurrencies,
    rates: state.currencies.currencies,
  })

export default connect(mapStateToProps)(Home);