import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
