
import { useSelector, useDispatch } from "react-redux";

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
            <p>{product.description}</p>
          </div>

          {/* price */}
          <div>
            <p>{product.price}</p>
          </div>
        </div>

        {/* buttons for adding and removing pizzas */}
        <div className="btns">
         
          {isPizzaThere ? <button onClick={removeItem}>Remove</button> : <button onClick={addItem}>Add</button> }
        </div>
      </div>
    </>
  );
}

export default ListItem;
