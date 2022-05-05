import QuestionsData from "../data/QuestionsData";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
const Quiz = () => {
  // console.log(QuestionsData);
  const [current, setCurrent] = useState(0);
  const [selectChoice, setSelectChoice] = useState("");
  // const { score, setScore, setAppState } = useContext(DataContext);

  useEffect(() => {
    checkAnswer();
  }, [selectChoice]);

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionsData[current].answer) {
        console.log("ตอบถูกและได้คะแนน");
        // setScore(score + 1);
        nextQuestion();
        <DataContext.Consumer>
          {(value) => value.setScore(value.score + 1)}
        </DataContext.Consumer>;
      } else {
        nextQuestion();
      }
    }
  };
  const nextQuestion = () => {
    setSelectChoice("");
    if (current === QuestionsData.length - 1) {
      <DataContext.Consumer>
        {(value) => {
          value.setAppState("score");
        }}
      </DataContext.Consumer>;
    } else {
      setCurrent(current + 1);
    }
  };

  // const checkAnswer = () => {
  //   if (selectChoice !== "") {
  //     if (selectChoice === QuestionsData[current].answer) {
  //       console.log("ตอบถูกและได้คะแนน");
  //       // setScore(score + 1);
  //       nextQuestion();
  //       <DataContext.Consumer>
  //         {(value) => value.setScore(value.score + 1)}
  //       </DataContext.Consumer>;
  //     } else {
  //       nextQuestion();
  //     }
  //   }
  // };

  // const nextQuestion = () => {
  //   setSelectChoice("");
  //   if (current === QuestionsData.length - 1) {
  //     setAppState("score");
  //   } else {
  //     setCurrent(current + 1);
  //   }
  // };

  return (
    <div className="quiz">
      <h1>{QuestionsData[current].question}</h1>
      <div className="choices">
        <button onClick={() => setSelectChoice("A")}>
          {QuestionsData[current].A}
        </button>
        <button onClick={() => setSelectChoice("B")}>
          {QuestionsData[current].B}
        </button>
        <button onClick={() => setSelectChoice("C")}>
          {QuestionsData[current].C}
        </button>
        <button onClick={() => setSelectChoice("D")}>
          {QuestionsData[current].D}
        </button>
      </div>
      <p>{current + 1}/5</p>
    </div>
  );
};

export default Quiz;
