import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {

  const {dispatch,secondsRemaining}=useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div>
      <button className="timer">
        {mins < 10 && "0"}
        {mins}:{secs < 10 && "0"}
        {secs}
      </button>
    </div>
  );
};

export default Timer;
