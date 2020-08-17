import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Login from '../Login'
import Regist from '../Regist'
import Dashboard from '../Dashboard'
import ForgotPass from '../ForgotPass'
import Detail from '../DetailUser'
import { Provider } from 'react-redux'
import { store } from '../../../config/redux'
import ResetPass from '../ResetPassword'

function App() {
  return (
    <Provider store ={store}>
    <Switch>
    <Route path='/' exact component={Login}></Route>
    <Route path='/register' component={Regist}></Route>
    <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/forgot' component={ForgotPass}></Route>
    <Route path='/detail/:iduser' component={Detail}></Route>
    <Route path='/resetpassword/:token' component={ResetPass}></Route>
    </Switch>
  </Provider>
  );
  
}

export default App;
