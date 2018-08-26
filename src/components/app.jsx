import React from 'react';
import Navbar from './navbar';
import AddProperty from './addproperty';
import Properties from './properties';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
