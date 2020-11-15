import React, { useState, useEffect, Fragment } from "react";
import Close from "@material-ui/icons/Close";
import Assessment from "@material-ui/icons/Assessment";
import { getTheme } from "./theme";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { useDarkMode } from "./useDarkMode";
import * as serviceWorker from "./serviceWorkerRegistration";
import Router from "./Router";
import { fetchCurrencies } from "./actions/currenciesActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    position: "relative",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App({ dispatch, loading, rates, hasErrors, view }) {
  const classes = useStyles();
  const [darkState, themeToggler] = useDarkMode();
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    dispatch(fetchCurrencies());

    if (process.env.NODE_ENV === "production") {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }

    if (newVersionAvailable)
      //show snackbar with refresh button
      setOpenSnackbar(true);
  }, [dispatch, newVersionAvailable]);

  const onServiceWorkerUpdate = (registration) => {
    setNewVersionAvailable(true);
    setWaitingWorker(registration && registration.waiting);
  };

  const updateServiceWorker = (event, reason) => {
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    setNewVersionAvailable(false);
    window.location.reload();
  };

  const renderView = () => {
    if (loading || hasErrors || !rates || rates.length === 0) return;

    return <Router />;
  };

  return (
    <ThemeProvider theme={getTheme(darkState)}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Currency Conveter
            </Typography>
            <IconButton color="inherit" aria-label="statistics">
              <Assessment />
            </IconButton>
            <Switch checked={darkState || false} onChange={themeToggler} />
          </Toolbar>
        </AppBar>
        <CssBaseline />

        {renderView()}
        <Snackbar
          open={openSnackbar}
          onClose={handleSnackbarClose}
          message="A new version was released"
          action={
            <Fragment>
              <Button
                color="secondary"
                size="small"
                onClick={updateServiceWorker}
              >
                REFRESH
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackbarClose}
              >
                <Close fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  loading: state.currencies.loading,
  rates: state.currencies.currencies,
  hasErrors: state.currencies.hasErrors,
  view: state.views.view,
});

export default connect(mapStateToProps)(App);
