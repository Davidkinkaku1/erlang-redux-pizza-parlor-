import AdminHeader from "../AdminHeader/AdminHeader";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import axios from 'axios';

//function to grab all of the order data needed from the database and display it
function Admin() {

  const dispatch = useDispatch();
  //checking to make sure data is coming in properly through the store from the database.
  const store = useSelector((store) => store);
  console.log("this is the store", store)
  const orderData = useSelector((store) => store.orderReducer);
  console.log("this is the orderData", orderData);

// the axios.get that grabs the data using a dispatch
let orders =() => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then(response => {
     console.log(response.data);
     dispatch({
      type: `SET_ORDERS`,
      payload: response.data
    });
    }).catch(error => {
      console.log('error on GET', error);
    });
   }

  //Calls the order function so that we actually get our data.
  useEffect(() => {
    console.log('in useEffect using orders!');
    orders();
  }, []);

    return (
        <>
          <AdminHeader/> {/*Header for admin page*/}
          <h1 className="App-title">Recent Orders</h1>
          <table className="AdminTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Type</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/*This loops over the data from the store and displays the info in a table.*/}
              {orderData.map((order, i) => {
                return <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                       </tr>;
              })} 
            </tbody>
          </table> 
       </>
    );
  }
  
  export default Admin;
