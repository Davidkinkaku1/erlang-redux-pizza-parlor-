import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


// PIZZAREDUCER, this is to grab the data for what pizzas are for sale.

const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
};

// ORDER REDUCER, this is to grab the data for the amount of things being ordered.
const orderReducer = (state = [], action) => {
    if (action.type === 'SET_ORDERS') {
        console.log("here is the payload for orderReducer", action.payload)
        return action.payload;
    }
    return state;
};

// CUSTMOERREDUCER, this is to grab the data from customers that creates a new object for the customers data.

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
// This is to combine data from both the cart and the customer to store needed data in the admin page.
const checkoutReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, { ...action.payload, quantity: 1 }];
    }

    else if (action.type === 'REMOVE_FROM_CART') {
       
        // take out the object with the id that comes in on the payload
        return state.filter(pizza => pizza.id !== action.payload.id);
    }





    else if (action.type === 'CLEAR_CART') {
        return []
    }
    return state;
};



// The store is the big JavaScript Object that holds all of the information for our application
// This holds all client side information for us, keeps data in the client to be accessed at any time.
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        checkoutReducer,
        orderReducer
    }),
    applyMiddleware(logger)
);

// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
