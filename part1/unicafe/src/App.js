import { useState } from 'react';

// Components are created here because it's such a small app.

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// TODO: implement positive and average states below.

// CURRENTLY WORKING ON AVERAGE STATE
// average should only calculate good and bad. Good increases by 1 and bad increases by 1. Neutral is just 0 w/ no effect.

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks.length}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  let [average, setAverage] = useState(0);
  let [positive, setPositive] = useState(0);

  return (
    <div>
      <Heading text={'give feedback'} />

      <Button
        handleClick={() => {
          const prevGood = good;
          setGood(prevGood + 1);

          setAverage(() => {
            let total = prevGood + 1 - bad;
            average = total / setAllClicks;
          });
          setAllClicks(allClicks.concat('c'));
          console.log(setAverage);
          setPositive((positive = (good / allClicks.length) * 100));
        }}
        text={'good'}
      />

      <Button
        handleClick={() => {
          setAllClicks(allClicks.concat('c'));
          setNeutral(neutral + 1);
        }}
        text={'neutral'}
      />

      <Button
        handleClick={() => {
          const prevBad = bad;
          setAllClicks(allClicks.concat('c'));
          setBad(prevBad + 1);
          setAverage(() => {
            let total = good + (prevBad - 1);
            average = total / setAllClicks;
          });
        }}
        text={'bad'}
      />

      <Heading text={'statistics'} />

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
