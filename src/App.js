import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
