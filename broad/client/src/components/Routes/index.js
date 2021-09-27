import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import Navigator from "../../pages/layout/Signup";
import Footer from "../../pages/layout/Footer";

import * as PATHS from "../../utils/paths";

const Routes = (() => {
  return (
    <div className="App">
      <Navigator />
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
      </Switch>
      <Footer />
    </div>
  )
})

export default Routes