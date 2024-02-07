import React from "react"

function TestAsideSelector({ data, currentQuestionIndex }) {
  return (
    <aside>
      <ul >
        {Array.from({ length: data.questions.length }, (_, i) => (
          <li 
            key={i}
            className={(i === currentQuestionIndex-1 && "selected") + " unclickable"}
          >
            <p>O</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default TestAsideSelector