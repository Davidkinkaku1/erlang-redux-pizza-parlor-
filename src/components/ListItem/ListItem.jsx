
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react-redux";
import Button from 'react-bootstrap/Button';
// Displays a single Product with price on the DOM
function ListItem({ product }) {
  // calling the dispatch storage with redux
  const dispatch = useDispatch();

  // adding item to the cart through a reducer
  const addItem = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  // removing item from the cart through a reducer
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
  // listing all the pizza down below.

  const checkoutData = useSelector((store) => store.checkoutReducer);
  console.log(checkoutData);


/// working to check if the pizza is there 
  const isPizzaThere = checkoutData.some(pizza => pizza.id === product.id);
  console.log('is this food there? ', isPizzaThere);


  return (
    <>
      <div className="pizzaDaddy">
        <div className="individualMenuItem">
          {/* picture */}
          <div>
            <img src={product.image_path} />
          </div>

          {/* menu item title */}
          <div>
            <h3>{product.name}</h3>
          </div>

          {/* description */}
          <div>
            <p className="description">{product.description}</p>
          </div>

          {/* price */}
          <div>
            <p className="price">{product.price}</p>
          </div>
        </div>     
          {/* toggle for add and remove on the individual item div */}
          {/* {<div className="menuItem" onClick={ () => setToggle(!toggle) }>
                {toggle ? <div className="menuDisplay"><p className="singleAddItem" onClick={()=>addItem()}>Add</p></div> :
                <div><p className="singleRemoveItem" onClick={() =>removeItem()}>Remove</p></div>}</div>} */}
        
        {/* buttons for adding and removing pizzas */}
        <div className="btns">
         
          {isPizzaThere ? <Button variant="outline-danger" onClick={removeItem}>Remove</Button> : <Button variant="outline-success" onClick={addItem}>Add</Button> }
        </div>
      </div>
    </>
  );
}

export default ListItem;
