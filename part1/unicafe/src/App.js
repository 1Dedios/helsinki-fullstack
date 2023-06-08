import { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  return (
    <div>
      <p>
        good <span id="good">{good}</span>
      </p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        all <span>{allClicks.length}</span>
      </p>
      <p>average {average / 3}</p>
      <p>positive {positive}</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  let [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <div>
      <Heading text={"give feedback"} />

      <Button
        handleClick={() => {
          setAllClicks(allClicks.concat("c"));
          setGood(good + 1);
          setAverage((average += 1));
          // console.log below
          console.log(setAverage);
          setPositive((positive = (good / allClicks) * 100));
        }}
        text={"good"}
      />

      <Button
        handleClick={() => {
          setAllClicks(allClicks.concat("c"));
          setNeutral(neutral + 1);
          setAverage((average += 0));
        }}
        text={"neutral"}
      />

      <Button
        handleClick={() => {
          setAllClicks(allClicks.concat("c"));
          setBad(bad + 1);
          setAverage((average += -1));
        }}
        text={"bad"}
      />

      <Heading text={"statistics"} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
