import { useState } from 'react';
import './counters.css';

export default function Counter1() {
  const counter = <Counter />;
  return (
    <section>
      <h1>Counter 1</h1>
      {counter}
      {counter}
    </section>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
