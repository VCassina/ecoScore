import React from "react";
import useIsMobile from "../helpers/useIsMobile.js";

function TestAsideSelector({ data, currentQuestionIndex, setResultScreen }) {
  const isMobile = useIsMobile();

  return (
    <aside>
      <ul
        className={`${
          isMobile === "mobile" ? "" : "flex-col gap-8"
        } flex flex-row justify-between`}
      >
        {Array.from({ length: data.subjects.length }, (_, i) => (
          <li
            key={i}
            className={`h-${isMobile === "mobile" ? "2" : "6"} w-${
              isMobile === "mobile" ? "6" : "2"
            } ${i === currentQuestionIndex - 1 ? "selected" : "bg-lagon"}`}
          ></li>
          
        ))}
      </ul>
    </aside>
  );
}

export default TestAsideSelector;
