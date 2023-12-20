import { useState } from 'react';

// COMPONENTS ARE BEING CREATED HERE BECAUSE IT'S A SMALL APP

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, val }) => {
  return (
    <p>
      {text} {val}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  if (allClicks.length === 0) {
    return 'No feedback given.';
  }

  return (
    <div>
      <StatisticLine text={'Good: '} val={good} />
      <StatisticLine text={'Neutral: '} val={neutral} />
      <StatisticLine text={'Bad: '} val={bad} />
      <StatisticLine text={'Total Clicks: '} val={allClicks.length} />
      <StatisticLine
        text={'Average: '}
        val={average.reduce((acc, val) => acc + val, 0) / allClicks.length}
      />
      <StatisticLine
        text={'Positive %: '}
        val={(positive / allClicks.length) * 100}
      />
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
