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
import { useQuiz } from "../contexts/QuizContext";

const App = () => {
  const { status, answer } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Startscreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              {answer !== null && <Nextbtn />}
            </Footer>
          </>
        )}
      </Main>
      {status === "finish" && <Finishedscreen />}
    </div>
  );
};

export default App;
