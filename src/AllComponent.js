import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CurrencyConverter from './services/CurrencyConverter'
import MaterialTable from "material-table";

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        margin: 24,
        maxWidth: "100%"
    }
});

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], selected: []};
    }

    async componentDidMount() {
        const data = await CurrencyConverter.update();
        const selected = await CurrencyConverter.getSelectedCurrencies();

        for(let d of data) {
            for(let s of selected) {
                if(d.id === s.id) {
                    d.tableData = { checked: true }
                }
            }
        }
 
        this.setState({ data: data, selected: selected});
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MaterialTable
                    columns={[
                        { title: "Name", field: "name" },
                        { title: "ID", field: "id" },
                        { title: "Rate", field: "rates", type: "numeric" }
                    ]}
                    data={this.state.data}
                    title=""
                    options={{
                        sorting: true,
                        selection: true,
                        pageSize: 20
                      }}
                      onSelectionChange={(rows) => CurrencyConverter.setSelectedCurrencies(rows)}
                />
            </div>
        );
    };
}

export default withStyles(useStyles, { withTheme: true })(All);