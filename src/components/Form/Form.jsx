import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputCustomer, setInputCustomer] = useState({customer_name:'', street_address:'', city:'', zip:'', type:'pickup'});

  const onSubmit = (event) => {
    // Ship off the new customer to redux
    console.log('Customer', inputCustomer);
    event.preventDefault();
    
    // Send the action with ADD_Airline to redux, with the payload
    // set to the Airline the user inputted
    dispatch({
      type: 'ADD_NEW_CUSTOMER',
      payload: inputCustomer
    })
    // Clear the form
    // setInputC('');
  }

  const handleNext = () => {
    //tell redux to clear cart 
    console.log('in handle next');
    history.push('/checkout');
  }
 
  return (
      <>
         <form onSubmit= {onSubmit}>
      <input onChange={(event)=> setInputCustomer({...inputCustomer, customer_name: event.target.value})} type='text' placeholder='Name' value ={inputCustomer.customer_name}/>
      <input onChange={(event) => setInputCustomer({...inputCustomer, street_address: event.target.value})} type='text' placeholder='Address' value ={inputCustomer.street_address}/>
      <input onChange={(event)=> setInputCustomer({...inputCustomer, city: event.target.value})} type='text' placeholder='City' value ={inputCustomer.city}/>
      <input onChange={(event)=> setInputCustomer({...inputCustomer, zip: event.target.value})} type='number' placeholder='Zip Code' value ={inputCustomer.zip}/>
      <select value={inputCustomer.type} onChange={(event)=> setInputCustomer({...inputCustomer, type:event.target.value})}>
            <option value={"pickup"}>Pickup</option>
            <option value={"delivery"}>Delivery</option>
            </select>
      <input type='submit' value='Submit' />
      </form>
      <button onClick={()=> handleNext()}>Next</button>
      </>
    );
  }
  
  export default Form;