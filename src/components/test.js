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
  
  const scoreMax = Object.keys(data.points)
    .filter((key) => /^\d+$/.test(key))
    .reduce((maxSum, key) => {
      const maxPoints = Math.max(...data.points[key]);
      return maxSum + maxPoints;
    }, 0);

  const scoreMin = Object.keys(data.points)
    .filter((key) => /^\d+$/.test(key))
    .reduce((minSum, key) => {
      const minPoints = Math.min(...data.points[key]);
      return minSum + minPoints;
    }, 0);

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
          scoreMax={scoreMax}
          scoreMin={scoreMin}
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
