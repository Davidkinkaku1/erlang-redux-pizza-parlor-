import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

//checkout grabs the stored data from the customerdata and checkoutdata groups and
//displays the order as a whole.
function Checkout() {
  //grabs checkoutdata
  const checkoutData = useSelector((store) => store.checkoutReducer);
  console.log(checkoutData);

  //grabs the customerdata
  const customerData = useSelector((store) => store.customerReducer);
  console.log(customerData);

  const dispatch = useDispatch();
  const history = useHistory();

  //this creates a final object that contains all of the needed data and
  //also computes the final total price.
  const handleCheckout = () => {
    let tempPizzaList = [];
    let total = 0;
    for (let item of checkoutData) {
      total += Number(item.price);
      let temObj = { id: item.id, quantity: item.quantity };
      tempPizzaList.push(temObj);
    }

    //the new final order object is created here
    let orderObj = {
      customer_name: customerData.customer_name,
      street_address: customerData.street_address,
      city: customerData.city,
      zip: customerData.zip,
      total: total,
      type: customerData.type,
      pizzas: tempPizzaList, // replacing the pizza array of object that was there.
    };
    console.log('inside this object', orderObj);
    //after completing the order this request clears the cart and
    //returns the user to the home page.
    axios
      .post("/api/order", orderObj)
      .then(response => {
        dispatch({
          type: "CLEAR_CART",
        });
        history.push("/");
      })
      .catch((err) => {
        alert("Error posting pizza to DB", err);
        console.log("Error posting pizza to DB", err);
      });
  };

  return (
    <>
      <div>
        <h2>Step 3: Checkout</h2>

        <p>{/*Displays customer personal information for them to doublecheck*/}
          <li>
            {customerData.customer_name}
            {customerData.street_address}
            {customerData.type}
            {customerData.city}
            {customerData.zip}
          </li>
        </p>

        {
          <div>
            <table>
              <tbody>{/*The details of the order are displayed here, (Pizza type and price)*/}
                {checkoutData.map((checkouts, i) => (
                  <tr key={i}>
                    {checkouts.name}: ${checkouts.price}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }

        <Button variant="outline-success" onClick={handleCheckout}>Checkout</Button>
        <button onClick={handleCheckout}>Checkout</button>{/*Checkout button to finilize purchase*/}

      </div>
    </>
  );
}

export default Checkout;
