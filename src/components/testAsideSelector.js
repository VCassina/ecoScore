import React from "react";
import useIsMobile from "../helpers/useIsMobile.js";

function TestAsideSelector({ data, currentQuestionIndex, setResultScreen }) {
  const isMobile = useIsMobile();
  console.log(data.subjects.length);
  console.log(isMobile);

  return (
    <aside>
      <ul
        className={`${
          isMobile === "mobile" ? "" : "flex-col gap-8"
        } flex flex-row justify-between w-80`}
      >
        {Array.from({ length: data.subjects.length }, (_, i) => (
          <li
            key={i}
            className={`bg-lagon ${
              isMobile === "mobile" ? "h-2 w-6" : "h-6 w-2"
            } ${i === currentQuestionIndex - 1 && "selected"}`}
          ></li>
        ))}
      </ul>
    </aside>
  );
}

export default TestAsideSelector;
