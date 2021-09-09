import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>

        {/* home */}
        <Route path = "/" exact>
          
          {/* all be put into header */}
        <header className='App-header'>
         <h1 className='App-title'>Prime Pizza</h1>
      </header>
       <img src='images/pizza_photo.png' />
       <p>Pizza is great.</p>
       {/* all be put into header */}

        <Header/>
        {/* link to menu */}
        </Route>

        {/* list / menu */}
        <Route path = "/list" >
        <Header/>
        {/* header contains total */}
        <List />
        </Route>


        {/* form */}
        <Route path ="/form">
        <Header/>
        {/* header contains total */}
        <Form />
        </Route>

        {/* checkout */}
        <Route path ="/checkout">
        <Header/>
        <Checkout />
        </Route>

        {/* admin */}
        <Route path ="/admin">
        {/* <AdminHeader/> or something else for the header */}
        <Admin />

        </Route>
        </Switch>

      </div>

      {/* home */}
      <li>
          <NavLink to="/">Home</NavLink>
        </li>

      {/* list */}
        <li>
          <NavLink to="/list">Menu</NavLink>
        </li>

      {/* form */}
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>

      {/* checkout */}
        <li>
          <NavLink to="/checkout">Checkout</NavLink>
        </li>

      {/* admin */}
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>

      </Router>
    // <div className='App'>
    //   <header className='App-header'>
    //     <h1 className='App-title'>Prime Pizza</h1>
    //   </header>
  
    //   <img src='images/pizza_photo.png' />
    //   <p>Pizza is great.</p>
  
    // </div>
  );
}

export default App;
