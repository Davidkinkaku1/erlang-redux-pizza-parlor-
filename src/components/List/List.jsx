import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import Header from '../Header/Header';

function List() {
const productData = useSelector(store => store.pizzaReducer);

  return (
<>
  <Header />
  <h2>Step 1: Pick Your Pizza</h2>
      <div>
        <ul>
          {productData.map((product, i) => {
            return <ListItem key={i} product={product} />;
          })}
        </ul>
      </div>
    </>
    )
  }
  
  export default List;