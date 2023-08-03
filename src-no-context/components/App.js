import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Startscreen from "./Startscreen";
import Error from "./Error";
import Question from "./Question";
import Nextbtn from "./Nextbtn";
import Progress from "./Progress";
import Finishedscreen from "./Finishedscreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_QUESTION=30;
const App = () => {
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore:0,
    secondsRemaining:null
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case "startQuiz":
        return { ...state, status: "active",secondsRemaining:state.questions.length*SECS_PER_QUESTION };
      case "newAnswer":
        const question = state.questions.at(state.index);
        
        return {
          ...state,
          answer: action.payload,

          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finish":
        return {...state,
        status:"finish",
        highscore: state.highscore>state.points
        ?state.highscore
        :state.points}
      case "restart":
        return {...initialState, status: "ready",
        questions:state.questions
       }
      case "tick":
        return {...state, secondsRemaining: state.secondsRemaining-1,status:state.secondsRemaining===0?"finish":state.status}
      default:
        throw new Error("action unknown");
    }
  }

  const [{ questions, status, index, answer, points ,highscore,secondsRemaining}, dispatch] = useReducer(reducer,initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    try {
      async function fetchData() {
        const data = await fetch("http://localhost:8000/questions");
        const res = await data.json();
        dispatch({ type: "dataReceived", payload: res });
      }
      fetchData();
    } catch (err) {
      dispatch({ type: "dataFailed" });
    }
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Startscreen dispatch={dispatch} num={numQuestions} />
        )}
        {status === "active" && (
          <>
           <Progress
           index={index}
           numQuestions={numQuestions}
           points={points}
           maxPoints={maxPoints}
           answer={answer}
           />
          <Question
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
           
            />
            <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
            {answer !== null && 
            <Nextbtn dispatch={dispatch}  lastQuestion={numQuestions} index={index}/>}
            </Footer>
            </>
        )}
        
      </Main>
      {status==="finish" && <Finishedscreen points={points} maxPoints={maxPoints} highscore={highscore} dispatch={dispatch}/>}

    </div>
  );
};

export default App;
