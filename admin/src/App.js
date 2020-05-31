import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './assets/css/admin.min.css';
import './assets/css/all.min.css';


import '../node_modules/noty/lib/noty.css'
import '../node_modules/noty/lib/themes/mint.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/internal' component={Dashboard} />
        <Route path='/register' component={Register} />
      </Switch>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
