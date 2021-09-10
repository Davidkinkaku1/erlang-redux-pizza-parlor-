import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
  <h2>Step 1: Pick Your Pizza, Daddy</h2>

      <div className = 'listDiv'>
      </div>
      <div>
        <ul>{/*Loops over the data and then displays each ListItem in its own list item*/}

          {productData.map((product, i) => {
            return <ListItem key={i} product={product}/>;
          })}
        </ul>

        <Button variant="outline-warning" onClick={() => handleNext()}>Next</Button>{' '}
        

      </div>
    </>
    )
  }
  
  export default List;