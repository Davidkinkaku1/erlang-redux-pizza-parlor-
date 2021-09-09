import { useDispatch } from "react-redux";
import { useState } from "react-redux";

// Displays a single Product with price on the DOM
function ListItem({ product }) {
  // Manupilating the toggle
//   const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  //   const addProductToCart = () => {
  //     console.log(product);

  const addItem = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
  return (
    <>
      <div className="pizzaDaddy">
        <div className="individualMenuItem">
          {/* picture */}
          <div>
            <img src={product.image_path}/>
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

        
              <div className="btns">
                    <button onClick={addItem}>Add</button>
                    <button onClick={removeItem}>Remove</button>
             </div> 

          {/* toggle for add and remove on the individual item div */}
          {/* {<div className="menuItem" onClick={ () => setToggle(!toggle) }>
                {toggle ? <div className="menuDisplay"><p className="singleAddItem" onClick={()=>addItem()}>Add</p></div> :
                <div><p className="singleRemoveItem" onClick={() =>removeItem()}>Remove</p></div>}</div>} */}
        
      </div>
    </>
  );
}

export default ListItem;
