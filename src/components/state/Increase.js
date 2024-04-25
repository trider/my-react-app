import { useState } from 'react';

const Increase = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        // setNumber(42);
        // setNumber(42 + number);
      }}>Increase the number</button>
    </>
  )
}

export default Increase;
