import React from "react";

function TestAsideSelector({ data, currentQuestionIndex }) {
  return (
    <aside>
      <ul className="flex flex-row justify-between">
        {Array.from({ length: data.subjects.length }, (_, i) => (
     <li
     key={i}
     className={`h-2 w-6 ${i === currentQuestionIndex - 1 ? "selected" : "bg-lagon"}`}
   >
            <span className="h-2 w-6">
              <p className="mb-1.5 mr-2"> </p>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TestAsideSelector;
