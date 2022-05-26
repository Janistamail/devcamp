import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterComp from "./components/RegisterComp";
import LoginComp from "./components/LoginComp";
import ProfileComp from "./components/ProfileComp";
// import

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComp />}></Route>
        <Route path="/register" element={<RegisterComp />}></Route>
        <Route path="/profile" element={<ProfileComp />}></Route>

        {/* <Route path="/profile" element={<Profile />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
