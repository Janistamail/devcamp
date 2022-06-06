import "./App.css";
import TableComp from "./components/TableComp";
import CreateComp from "./components/CreateComp";
import EditComp from "./components/EditComp";
import { Routes, Route, Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useDispatch } from "react-redux";
import { init } from "./productSlice";
import "antd/dist/antd.css";

function App() {
  const dispatch = useDispatch();
  // let result = "";
  axios.defaults.baseURL = "http://localhost:3000";

  useEffect(() => {
    // console.log(axios("/"));
    async function getData() {
      let result = await axios.get("/");
      result = result.data;
      dispatch(init(result));
    }
    getData();

    // dispatch(init());
  }, []);

  return (
    // <UserContext.Provider value={result}>
    <div>
      <Routes>
        <Route path="/" element={<TableComp />} />
        <Route path="create" element={<CreateComp />} />
        <Route path="edit/:id" element={<EditComp />} />
      </Routes>
      {/* <Axios /> */}
    </div>
    // </UserContext.Provider>
  );
}

export default App;
