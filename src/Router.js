import React from "react";
import Home from "./components/HomeComponent";
import All from "./components/AllComponent";
import { setView, Views } from "./actions/index";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function AppRouter({ dispatch, view }) {
  const classes = useStyles();

  const renderFab = (view) => {
    switch (view) {
      case Views.HOME:
        return (
          <Fab
            component={Link}
            to="/all"
            color="primary"
            className={classes.fab}
          >
            <Add />
          </Fab>
        );
      case Views.ALL:
        return (
          <Fab component={Link} to="/" color="primary" className={classes.fab}>
            <Close />
          </Fab>
        );
      case Views.STATS:
        return null;
      default:
        return null;
    }
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/all"
          render={() => {
            dispatch(setView(Views.ALL));
            return <All />;
          }}
        />
        <Route
          path="/"
          render={() => {
            dispatch(setView(Views.HOME));
            return <Home />;
          }}
        />
        <Redirect to="/" />
      </Switch>
      {renderFab(view)}
    </Router>
  );
}

const mapStateToProps = (state) => ({
  view: state.views.view,
});

export default connect(mapStateToProps)(AppRouter);
