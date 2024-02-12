import React from "react"

function TestResults({ setCurrentQuestionIndex, scoresSlots, scoreMax, scoreMin, resultScreen, setResultScreen}) {
  const scoreResult = scoresSlots.reduce((sum, score) => sum + score, 0);
  const percentage = ((scoreResult - scoreMin) / (scoreMax - scoreMin)) * 100;


  let comment = "";
  if (percentage >= 0 && percentage <= 10) {
    comment = "Incroyable. Nous vous remercions au nom d'EcoScore pour votre dévotion à la cause.";
  } else if (percentage > 10 && percentage <= 20) {
    comment = "C'est excellent ! Merci à vous pour vos engagements.";
  } else if (percentage > 20 && percentage <= 40) {
    comment = "C'est très bon ! Vous pouvez toujours consulter nos astuces mais vous n'êtes plus un amateur sur le sujet à l'évidence.";
  } else if (percentage > 40 && percentage <= 60) {
    comment = "Vous êtes loin d'être le pire mais un petit tour dans nos astuces peut toujours vous donner un coup de pouce.";
  } else if (percentage > 60 && percentage <= 80) {
    comment = "C'est un début mais c'est encore trop timide, consultez nos astuces !";
  } else if (percentage > 80 && percentage <= 100) {
    comment = "Il faut faire des efforts d'urgence !!";
  }

  React.useEffect(() => {
    setResultScreen(1)
  }, [percentage, setResultScreen])

  return (
    <section className="flex flex-col gap-6 text-center">
      <p>Votre score total est de :</p>
      <p className="border-b-2">{(100 - percentage).toFixed(2)}%</p>
      <p>{comment}</p>
      <p onClick={() => { setCurrentQuestionIndex(1); setResultScreen(0); }}> Refaire le test</p>
    </section>
  );
}

export default TestResults