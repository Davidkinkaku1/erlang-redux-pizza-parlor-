import { useSelector } from "react-redux";

function Header() {
  const itemList = useSelector((store) => store.checkoutReducer);
  console.log(itemList);

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
        <h1 className="App-title">DNH Pizza</h1>
        <h4>Total: ${calcTotal()} </h4>
      </header>

      <p>Pizza IS great.</p>
    </>
  );
}

export default Header;
