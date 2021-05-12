import React from "react";
import "./styles.css";
import Home from "./Home";
import Admins from "./components/admins/Admins"
import Users from "./components/users/Users";
import Organizations from "./components/organizations/Organizations";
import Roles from "./components/roles/Roles";
import Contact from "./Contact";

import { Route, Switch } from "react-router-dom";
import Dash from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Dash />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/admins" render={props => <Admins {...props} />} />
        <Route exact path="/users" render={props => <Users {...props} />} />
        <Route exact path="/organizations" render={props => <Organizations {...props} />} />
        <Route exact path="/roles" render={props => <Roles {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        
      </Switch>
    </div>
  );
}