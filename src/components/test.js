import React from "react";
import TestAsideSelector from "../items/testAsideSelector";
import TestAnswerSelector from "../items/testAnswerSelector";

function Test() {
  return (
    <section>
      <div>
        <div>1/7</div>
        <article>
          <p>Polluez-vous, hein !? SALE BÂTARD !!</p>
          <TestAnswerSelector />
        </article>
      </div>
      <TestAsideSelector />
    </section>
  );
}

export default Test;
