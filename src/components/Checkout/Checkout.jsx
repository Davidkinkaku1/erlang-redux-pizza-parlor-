import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Checkout() {
  const checkoutData = useSelector((store) => store.checkoutReducer);
  console.log(checkoutData);

  const customerData = useSelector((store) => store.customerReducer);
  console.log(customerData);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCheckout = () => {
    dispatch({
      type: "CLEAR_CART",
    });
    history.push("/");
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
