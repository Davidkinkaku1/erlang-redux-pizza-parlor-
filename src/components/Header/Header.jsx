import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

//template header used for most of our pages also 
//contains a calculator for the running total in the cart.
function Header() {
  const itemList = useSelector((store) => store.checkoutReducer);
  console.log(itemList);

  //calculates a running total for cart items
  function calcTotal() {
    let total = 0;
    for (let item of itemList) {
      total += Number(item.price);
    }
    console.log("this is the total", total);
    return total;
  }

  return (
    <>
      <header className="App-header">
         {/* list */}
        

     
        <h1 className="App-title">DNH Pizza</h1>
        <NavLink className="navlink" to="/list">Menu</NavLink>
        <h4>Total: ${calcTotal()} </h4>
      </header>

      <p>Welcome to DNH pizza!</p>
    </>
  );
}

export default Header;
