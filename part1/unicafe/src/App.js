import { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <p>
        good <span id="good">{good}</span>
      </p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        all <span id="all">{all}</span>
      </p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  {
    /* I think the way to go with all, positive and average is adding an event listener. I just don't know how to access it. I can access the element in Statistics component but the setting function for state exists in the App component 🤔 */
  }

  // document.querySelector("all").addEventListener("click", setAll(all + 1));

  return (
    <div>
      <Heading text={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Heading text={"statistics"} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
