import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import Checkout from "../Checkout/Checkout";
import Form from "../Form/Form";
import List from "../List/List";
import AdminHeader from "../AdminHeader/AdminHeader";

function App() {
  const dispatch = useDispatch();

    //grabs the refreshPizzas get request and updates Pizzas
    useEffect(() => {
      console.log('in useEffect');
      refreshPizzas();
    }, []);

  //GET request to refresh the pizza list
  function refreshPizzas() {
   axios({
     method: 'GET',
     url: '/api/pizza'
   }).then(response => {
     console.log(response.data);
     dispatch({
       type: `SET_PIZZAS`,
       payload: response.data
     });
   }).catch(error => {
     console.log('error on GET', error);
   });
  }
 
  
  return (
    <Router>
      <div className="App">
        <Switch>

        {/*home*/}
        <Route path = "/" exact>
        <Header/>
        <img src='images/pizza_photo.png' />
        </Route>

        {/*list / menu*/}
        <Route path = "/list" >
        <Header/>
        <List/>
        </Route>


        {/*form*/}
        <Route path ="/form">
        <Header/>
        <Form refreshPizzas={refreshPizzas}/>
        </Route>

        {/*checkout*/}
        <Route path ="/checkout">
        <Header/>
        <Checkout />
        </Route>

        {/*admin*/}
        <Route path ="/admin">
        <Admin />

        </Route>
        </Switch>

      </div>

      {/*home*/}
      <li>
          <NavLink to="/">Home</NavLink>
        </li>

      {/*list*/}
        <li>
          <NavLink to="/list">List</NavLink>
        </li>

      {/*form*/}
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>

      {/*checkout*/}
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>

      {/*admin for testing, before deploying remove the link!*/}
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>

      </Router>
  );
}

export default App;
