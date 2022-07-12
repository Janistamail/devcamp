import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import { ShopStock, ProductDetail } from "./Components/ShopStock";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import {
  WareHouseLocation,
  WareHouseDetail,
} from "./Components/WareHouseLocation";

import NotMatch from "./Components/NotMatch";
// import ProductDetail

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopStock" element={<ShopStock />} />
          <Route path="wareHouseLocation" element={<WareHouseLocation />} />
          <Route
            path="wareHouseLocation/wareHouseDetail"
            element={<WareHouseDetail />}
          />

          <Route path="contact" element={<Contact />} />
          <Route path="shopStock/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

export default App;
