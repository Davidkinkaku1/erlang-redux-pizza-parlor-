import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


// pizza reducer

const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
};

// customer reducer

let defaultCustomerState = {
customer_name: "",
  street_address: "",
  city: "",
  zip: "",
  total: "",
  type: "",
}

const customerReducer = (state = defaultCustomerState, action) => {
    if (action.type === 'ADD_NEW_CUSTOMER') {
        return action.payload;
    }
    return state;
};



// checkout reducer {id: '', name: '', description: '', image_path: '', price: '',  quantity: 1}
const checkoutReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, {...action.payload, quantity:1 }];
    }
    else if (action.type === 'REMOVE_FROM_CART') {
        let newState = [...state];        
        // take out the object with the id that comes in on the payload
        newState.filter(id)

        return newState;
    }
    else if (action.type === 'CLEAR_CART'){
        return []
    }
    return state;
};



// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        checkoutReducer
    }),
    applyMiddleware(logger)   
);

// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
