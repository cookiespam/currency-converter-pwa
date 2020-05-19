import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './HomeComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import AllComponent from './AllComponent';
import Fab from '@material-ui/core/Fab';
import CurrencyConverter from './services/CurrencyConverter'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

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
  // let isHome = true;
  const [isHome, setIsHome] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChange = () => {
    setIsHome(!isHome);
  }

  useEffect(() => {
    CurrencyConverter.update().then(() => {
      setIsLoaded(true);
    });
  });

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Currency Conveter
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <View isLoaded={isLoaded} isHome={isHome} />
      <Fab color="primary" className={classes.fab} onClick={handleChange}>{isHome ? <AddIcon /> : <CloseIcon />}</Fab>
    </div>
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
