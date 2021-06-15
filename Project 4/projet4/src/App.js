import React, { useState } from "react"
import ShoppingCart from "./ShoppingCart";


function App() {
const [Add, SetAdd] = useState(0)

const Confirm = () => {
  SetAdd(Add => Add + 122)
}
  return (
    <div className="App">
      <h1>Ecommerce Site Web</h1>
      {/* <h3>Solde</h3>
      <h2>{Solde}</h2> */}
      <h3>Panier</h3>
      <h2>{Add}</h2>
      <button onClick={Confirm}>Confirm</button>
      <ShoppingCart title="PC Portable MacBook 2020" price={122}/>
      <ShoppingCart title="IPhone 12 RED" price={122}/>
      <ShoppingCart title="Galaxy" price={80}/>
      <ShoppingCart title="PC Portable MacBook 2020" price={122}/>
      <ShoppingCart title="IPhone 12 RED" price={122}/>
      <ShoppingCart title="Galaxy" price={122}/>
      <ShoppingCart title="PC Portable MacBook 2020" price={122}/>
      <ShoppingCart title="IPhone 12 RED" price={122}/>
      <ShoppingCart title="Galaxy" price={80}/>

    </div>
  );
}

export default App;
