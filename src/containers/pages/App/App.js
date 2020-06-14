import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Login from '../Login'
import Regist from '../Regist'
import Dashboard from '../Dashboard'
import ForgotPass from '../ForgotPass'
import Detail from '../DetailUser'
import { Provider } from 'react-redux'
import { store } from '../../../config/redux'
function App() {
  return (
    <Provider store ={store}>
  <Router>
    <Route path='/' exact component={Login}></Route>
    <Route path='/register' component={Regist}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/forgot' component={ForgotPass}></Route>
    <Route path='/detail/:iduser' component={Detail}></Route>
  </Router>
  </Provider>
  );
  
}

export default App;
