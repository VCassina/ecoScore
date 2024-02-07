import React from "react";
import TestAsideSelector from "./testAsideSelector";
import TestAnswerSelector from "./testAnswerSelector";
import data from "../datas/questions.json";
import { useStore } from "../store";
import TestResults from "./testResults";

function Test() {
 
  const {
    currentQuestionIndex,
    incrementCurrentQuestionIndex,
    decrementCurrentQuestionIndex,
    setCurrentQuestionIndex,
    scores,
    updateScoreSlot,
  } = useStore();
  const handleReturnClick = () => {
    decrementCurrentQuestionIndex();
    updateScoreSlot(currentQuestionIndex - 2, 0);
  };
  console.log(scores)
  return (
    <section>
      {currentQuestionIndex < data.questions.length + 1 ? (
        <div>
          <div className="compter">
            {currentQuestionIndex}/{data.questions.length}
          </div>
          <article>
            <p>{data.questions[currentQuestionIndex - 1]}</p>
            <TestAnswerSelector
              data={data}
              currentQuestionIndex={currentQuestionIndex}
              onAnswerClick={incrementCurrentQuestionIndex}
              updateScoreSlot={updateScoreSlot}
            />
            {currentQuestionIndex !== 1 && (
              <p className="return" onClick={handleReturnClick}>
                Retour{" "}
              </p>
            )}
          </article>
        </div>
      ) : (
        <TestResults
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          scoresSlots={scores}
        />
      )}

      <TestAsideSelector
        data={data}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </section>
  );
}

export default Test;
