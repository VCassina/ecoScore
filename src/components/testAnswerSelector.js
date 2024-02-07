import React from "react";

function TestAnswerSelector({ data, currentQuestionIndex, onAnswerClick, updateScoreSlot}) {
  
  return (
    <aside>
      <ul>
        {Object.keys(data.answers[currentQuestionIndex]).map((key) => (
                  <li key={key} onClick={() => {
                    onAnswerClick(currentQuestionIndex + 1)
                    updateScoreSlot(currentQuestionIndex-1, data.points[currentQuestionIndex][key])
                  }}>
                  {data.answers[currentQuestionIndex][key]}
                </li>
        ))}
      </ul>
    </aside>
  );
}

export default TestAnswerSelector;
