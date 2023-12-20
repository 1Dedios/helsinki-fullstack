import { useState } from 'react';

// COMPONENTS ARE BEING CREATED HERE BECAUSE IT'S A SMALL APP

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks.length}</p>
      <p>
        average {average.reduce((acc, val) => acc + val, 0) / allClicks.length}
      </p>
      <p>positive {(positive / allClicks.length) * 100}%</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  let [average, setAverage] = useState([]);
  let [positive, setPositive] = useState(0);

  return (
    <div>
      <Heading text={'give feedback'} />

      <Button
        handleClick={() => {
          let prevGood = good;
          let prevPositivePercentage = positive;
          setGood(prevGood + 1);
          setAllClicks(allClicks.concat('G'));
          setAverage(average.concat(1));
          setPositive(prevPositivePercentage + 1);
        }}
        text={'good'}
      />

      <Button
        handleClick={() => {
          let prevNeutral = neutral;
          setNeutral(prevNeutral + 1);
          setAllClicks(allClicks.concat('N'));
        }}
        text={'neutral'}
      />

      <Button
        handleClick={() => {
          let prevBad = bad;
          setBad(prevBad + 1);
          setAllClicks(allClicks.concat('B'));
          setAverage(average.concat(-1));
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
