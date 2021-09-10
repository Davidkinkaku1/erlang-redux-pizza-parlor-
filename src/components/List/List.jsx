import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom';

//This is to display everything with regards to the pizza items that the customer can pick from.
function List(props) {
  const history = useHistory();
  //Grabs the pizza information
  const productData = useSelector(store => store.pizzaReducer);
  
  const handleNext = () => {
      //tell redux to clear cart 
      // TODO: Clear the cart and navigate to the product page
      history.push('/form'); 
    }
  
  return (
<>
  <h2>Step 1: Pick Your Pizza</h2>
      <div>
        <ul>{/*Loops over the data and then displays each ListItem in its own list item*/}
          {productData.map((product, i) => {
            return <ListItem key={i} product={product}/>;
          })}
        </ul>
        <button onClick={() => handleNext()}>Next</button>{/*Button to confirm pizza selection and move to the next page*/}
      </div>
    </>
    )
  }
  
  export default List;