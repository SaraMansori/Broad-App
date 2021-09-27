import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from "../../pages/HomePage";

import * as PATHS from "../../utils/paths";

const Routes = (() => {
  return (
    <Switch>
      <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
    </Switch>
  )
})

export default Routes