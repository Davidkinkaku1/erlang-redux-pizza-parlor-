import AdminHeader from "../AdminHeader/AdminHeader";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import axios from 'axios';

function Admin() {

  const dispatch = useDispatch();
  // const history = useHistory();
  
  const store = useSelector((store) => store);
  console.log("this is the store", store)
  const orderData = useSelector((store) => store.orderReducer);
  console.log("this is the orderData", orderData);

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

  useEffect(() => {
    console.log('in useEffect using orders!');
    orders();
  }, []);

    return (
        <>
        <AdminHeader/>
          <h1 className="App-title">Recent Orders</h1>
          <table className="AdminTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
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

  // {employeeList.map(employee => (
  //   <li key={employee.idNumber}>
  //     {`${employee.firstName}
  //     ${employee.lastName}
  //     is the ${employee.jobTitle}
  //     and makes ${employee.annualSalary}`}
  //     <button onClick={() => deleteEmployee(employee)}>
  //       Delete
  //     </button>
  //   </li>