import React from 'react';
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
function App() {
  const [isCartShow,SetisCartShow]=React.useState(false)
  const setCartClose=()=>{
    SetisCartShow(false)
  }
  const setCartShow=()=>{
    SetisCartShow(true)
  }
  return (
    <div>
      {isCartShow &&<Cart onClose={setCartClose}/>}
      <Header onCloseCart={setCartShow} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
