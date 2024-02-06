import React from "react";

function TestAsideSelector() {
  return (
    <aside>
      <ul >
        {Array.from({ length: 3 }, (_, i) => (
          <li key={i}>
            <p>Etape {i+1}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TestAsideSelector;