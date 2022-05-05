import "./App.css";
import { useState } from "react";

function App() {
  let i = 0;
  let [toDoList, setToDoList] = useState([{ date: Date(), msg: "hello" }]);
  // let [message, setMessage] = useState("");

  function checkEnter(e) {
    let message = e.target.value;

    if (e.key === "Enter" && message !== "") {
      let aaa = [...toDoList];
      aaa.push({ date: Date(), msg: message });
      // console.log(message);
      // console.log(e.target.value);
      setToDoList(aaa);
      // data.push({ date: Date(), msg: message });
    } else if (e.key === "Enter" && message == "") {
      alert("NO ToDoList");
    }
  }

  function deleteList() {
    let ans = toDoList.filter(x=> x!=);
  }

  return (
    <div>
      <div>
        {toDoList.map((x) => (
          <div >
            <p>{x.date}</p>
            <p>{x.msg}</p>
            <button onClick={deleteList}>DELETE</button>
          </div>
        ))}
      </div>

      <input type="text" onKeyDown={checkEnter}></input>
    </div>
  );
}

export default App;
