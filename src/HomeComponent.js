import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CurrencyRow from './CurrencyRow';
import CurrencyConverter from './services/CurrencyConverter'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        margin: 24
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    async componentDidMount() {
        const response = await CurrencyConverter.getSelectedCurrencies();
        this.setState({data: response});
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {this.renderCurrencyRows(this.state.data)}
            </div>
        );
    };

    renderCurrencyRows(array) {
        if (typeof array !== 'object' || array.length === 0) return;

        const rows = array.map(item =>
            <CurrencyRow key={item.id} id={item.id} name={item.name} rate={item.rates} change={this.change.bind(this)}></CurrencyRow>
        );

        return rows;
    }

    change(currencyId, amount) {
        if (isNaN(amount)) { return; }

        CurrencyConverter.change(this.state.data, currencyId, amount);
        
        this.setState({data: this.state.data});
    }
}

export default withStyles(useStyles, { withTheme: true })(Home);