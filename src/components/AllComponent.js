import React, { useEffect } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { fetchTableData, updateSelectedCurrencies } from '../actions/currenciesActions';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 24,
        maxWidth: "100%"
    }
}));

function All({ dispatch, tableData, rates }) {
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchTableData(rates));
      }, [dispatch, rates])

    const renderTable = () => {
        return <MaterialTable
            columns={[
                { title: "Name", field: "name" },
                { title: "ID", field: "id" },
                { title: "Rate", field: "rates", type: "numeric" }
            ]}
            data={tableData}
            title=""
            options={{
                sorting: true,
                selection: true,
                pageSize: 20
            }}
            onSelectionChange={(rows) => dispatch(updateSelectedCurrencies(rows))}
        />
    }

    return (
        <div className={classes.root}>
            {renderTable()}
        </div>
    );

}

const mapStateToProps = state => ({
    tableData: state.currencies.tableData,
    rates: state.currencies.currencies,
  })

export default connect(mapStateToProps)(All);