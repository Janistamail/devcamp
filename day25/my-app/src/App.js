import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartComp from "./components/CartComp";
import ProfileComp from "./components/ProfileComp";
import ProductListComp from "./components/ProductListComp";
import LayoutComp from "./components/LayoutComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComp />}>
        <Route index element={<ProfileComp />} />
        <Route path="cart" element={<CartComp />} />
        <Route path="productList" element={<ProductListComp />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
