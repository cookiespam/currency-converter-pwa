import React, { useState, useEffect, Fragment } from 'react';
import Home from './HomeComponent';
import AllComponent from './AllComponent';
import CurrencyConverter from './services/CurrencyConverter'
import { Add, Close } from '@material-ui/icons';
import { getTheme } from "./theme";
import { Button, Snackbar, ThemeProvider, Switch, makeStyles, Fab, Typography, Toolbar, AppBar, CssBaseline, IconButton } from "@material-ui/core";
import { useDarkMode } from "./useDarkMode";
import * as serviceWorker from "./serviceWorker";

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
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();
  const [isHome, setIsHome] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkState, themeToggler] = useDarkMode();
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = () => {
    setIsHome(!isHome);
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    CurrencyConverter.update().then(() => {
      setIsLoaded(true);
    });

    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
    }

    if (newVersionAvailable) //show snackbar with refresh button
      setOpenSnackbar(true);

  }, [newVersionAvailable]);

  const onServiceWorkerUpdate = (registration) => {
    setNewVersionAvailable(true);
    setWaitingWorker(registration && registration.waiting);
  };

  const updateServiceWorker = (event, reason) => {
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    setNewVersionAvailable(false);
    window.location.reload();
  };

  return (
    <ThemeProvider theme={getTheme(darkState)}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Currency Conveter
            </Typography>
            <Switch checked={darkState || false} onChange={themeToggler} />
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <View isLoaded={isLoaded} isHome={isHome} />
        <Fab color="primary" className={classes.fab} onClick={handleChange}>{isHome ? <Add /> : <Close />}</Fab>

        <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        message="A new version was released"
        action={
          <Fragment>
            <Button color="secondary" size="small" onClick={updateServiceWorker}>
              REFRESH
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
              <Close fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
      </div>
    </ThemeProvider>
  );
}

function View({ isLoaded, isHome }) {
  if (!isLoaded) {
    return null;
  }

  if (isHome) {
    return (<Home />)
  } else {
    return (<AllComponent />)
  }

}

export default App;
