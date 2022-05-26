import React, { Component } from "react";

export default class componentName extends Component {
  constructor() {
    super();
    const name = prompt("Type Name :");
    this.state = {
      username: name ? name : "Unknown User",
      // current: [],
      // next: [],
      history: [],
    };
  }

  componentDidMount() {
    // console.log(name);
    // !this.state.username &&
    //   this.setState({ username:  });
    // if (name === "") {
    //   this.setState({
    //     username: "name",
    //   });
    // } else {
    //   this.setState({
    //     username: name,
    //   });
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.username);
    console.log(nextState.username);

    if (this.state.username === nextState.username) {
      alert("คุณใช้งานชื่อซ้ำ");
      return false;
    } else {
      // this.myFunc(this.state.username, nextState.username);
      return true;
    }

    return true;
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input id="changename" type={"text"} />
        <button
          onClick={() => {
            const name = document.getElementById("changename").value;
            // if (name === "") {
            this.setState({
              username: name ? name : "Unknown",
              history: [
                ...this.state.history,
                {
                  current: [this.state.username],
                  next: [name ? name : "Unknown"],
                  date: new Date(),
                },
              ],
            });
          }}
        >
          Change your name
        </button>
        {/* <p>{this.state.history.next[1]}</p> */}
        {/* <p>{this.state.history.current}</p> */}
        <p>
          {this.state.history.map((x) => {
            return (
              <div>
                {/* <div>{JSON.stringify(x)}</div> */}
                <p>
                  Current: {x.current}, Next: {x.next}
                </p>
                {/* <div>{new Date()}</div> */}
              </div>
            );
          })}
        </p>
      </div>
    );
  }
}
