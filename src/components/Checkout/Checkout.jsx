import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const checkoutData = useSelector((store) => store.checkoutReducer);
  console.log(checkoutData);

  const customerData = useSelector((store) => store.customerReducer);
  console.log(customerData);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCheckout = () => {
    let tempPizzaList = [];
    let total = 0;
    for (let item of checkoutData) {
      total += Number(item.price);
      let temObj = { id: item.id, quantity: item.quantity };
      tempPizzaList.push(temObj);
    }

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

        <p>
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
              <tbody>
                {checkoutData.map((checkouts, i) => (
                  <tr key={i}>
                    {checkouts.name}: ${checkouts.price}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default Checkout;
