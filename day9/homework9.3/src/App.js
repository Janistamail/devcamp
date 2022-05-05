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
      e.target.value = "";

      // data.push({ date: Date(), msg: message });
    } else if (e.key === "Enter" && message == "") {
      e.target.value = "";
      alert("NO ToDoList");
    }
  }

  function deleteList(x) {
    let ans = toDoList.filter((y) => y.msg !== x.msg);
    setToDoList(ans);
  }

  return (
    <div>
      <div>
        {toDoList.map((x) => (
          <div className="card">
            <p>{x.date}</p>
            <p>{x.msg}</p>
            <button onClick={() => deleteList(x)}>DELETE</button>
          </div>
        ))}
      </div>

      <input className="note" type="text" onKeyDown={checkEnter}></input>
    </div>
  );
}

export default App;
