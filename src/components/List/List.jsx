import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom';


function List(props) {
  const history = useHistory();
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
        <ul>
          {productData.map((product, i) => {
            return <ListItem key={i} product={product}/>;
          })}
        </ul>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </>
    )
  }
  
  export default List;