const Heading = () => <h1>give feedback</h1>;

const Button = ({ text }) => <button>{text}</button>;

function App() {
  return (
    <div>
      <Heading />
      <Button text={"good"} />
      <Button text={"neutral"} />
      <Button text={"bad"} />
      <h1>hey</h1>
    </div>
  );
}

export default App;
