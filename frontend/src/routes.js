import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} exact component={Logon} />
              <Route path={process.env.PUBLIC_URL + '/register'} component={Register} />

              <Route path={process.env.PUBLIC_URL + '/profile'} component={Profile} />
              <Route path={process.env.PUBLIC_URL + '/incidents/new'} component={NewIncident} />
          </Switch>
        </BrowserRouter>
    )
}