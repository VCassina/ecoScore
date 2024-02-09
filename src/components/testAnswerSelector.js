import React from "react";

function TestAnswerSelector({
  data,
  currentQuestionIndex,
  onAnswerClick,
  updateScoreSlot,
}) {
  return (
    <aside className="text-left answers">
      <ul className="w-full justify-start">
        {Object.keys(data.answers[currentQuestionIndex]).map((key) => (
          <li
            key={key}
            onClick={(event) => {
              event.preventDefault();
              onAnswerClick(currentQuestionIndex + 1);
              updateScoreSlot(
                currentQuestionIndex - 1,
                data.points[currentQuestionIndex][key]
              );
            }}
            className="w-full flex gap-10"
          >
            <input type="checkbox" />
            {data.answers[currentQuestionIndex][key]}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TestAnswerSelector;
