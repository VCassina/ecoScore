import React from "react"

function TestResults({ setCurrentQuestionIndex, scoresSlots }) {
  const scoreResult = scoresSlots.reduce((sum, score) => sum + score, 0)

  return (
    <section>
      <p>Votre score total est de :</p> {scoreResult}
      <p onClick={() => setCurrentQuestionIndex(1)}> Refaire le test</p>
    </section>
  )
}

export default TestResults