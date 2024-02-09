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
    <section className="p-4 m-4 flex flex-col gap-8">
      {currentQuestionIndex < data.questions.length + 1 ? (
        <div className="flex flex-col gap-4">
          <div className="compter flex flex-row border-b-2 justify-between space-x-2 items-center h-20">
            <p>
              {currentQuestionIndex}/{data.questions.length}
            </p>
            <p className="flex-1 text-center">
              {data.questions[currentQuestionIndex - 1]}
            </p>
          </div>
          <article className="flex flex-col gap-4">
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
