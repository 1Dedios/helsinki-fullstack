import { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = () => {
  // hold state here and render in return
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <p>good</p>
      <p>neutral</p>
      <p>bad</p>
    </div>
  );
};

function App() {
  // handleclick functions are here. remember eventhandlers are functions

  const handleClick = () => console.log("you pressed me");

  return (
    <div>
      <Heading text={"give feedback"} />
      <Button handleClick={handleClick} text={"good"} />
      <Button text={"neutral"} />
      <Button text={"bad"} />
      <Heading text={"statistics"} />
      <Statistics />
    </div>
  );
}

export default App;
