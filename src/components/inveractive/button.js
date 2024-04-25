export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
        <h2>Button</h2>
        <button onClick={handleClick}>Click me</button>
    </div>

  );
}