import "./App.css";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import NotMatch from "./Components/NotMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

export default App;
