import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    currencyText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    currencyInput: {
        width: '100%'
    }
}));

function CurrencyRow({currency, change}) {
    const classes = useStyles();

    function handleChange(event) {
        change(currency.id, event.target.value)
    }

    return (
        <Grid container spacing={3}>
            <Grid className={classes.currencyText} item sm={3}>
                <Typography variant="body1">
                    {currency.name} ({currency.id})
                </Typography>
            </Grid>
            <Grid item sm={9}>
                <TextField
                    id="outlined-number"
                    className={classes.currencyInput}
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={currency.rates}
                    onChange={handleChange}
                />
            </Grid>
        </Grid>
    );
}

export default CurrencyRow;
