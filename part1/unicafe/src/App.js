import { useState } from 'react';

// COMPONENTS ARE BEING CREATED HERE BECAUSE IT'S A SMALL APP

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick, style }) => {
  return (
    <button style={style} onClick={handleClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({ text }) => {
  return (
    <>
      <span>{text}</span>
    </>
  );
};

const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
  if (allClicks.length === 0) {
    return 'No feedback given.';
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <StatisticLine text={'Good'} />
          </td>
          <br />
          <td>
            <StatisticLine text={good} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text={'Neutral'} />
          </td>
          <br />
          <td>
            <StatisticLine text={neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text={'Bad'} />
          </td>
          <br />
          <td>
            <StatisticLine text={bad} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text={'All'} />
          </td>
          <br />
          <td>
            <StatisticLine text={allClicks.length} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text={'Average'} />
          </td>
          <br />
          <td>
            <StatisticLine
              text={
                average.reduce((acc, val) => acc + val, 0) / allClicks.length
              }
            />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text={'Positive'} />
          </td>
          <br />
          <td>
            <StatisticLine text={(positive / allClicks.length) * 100 + '%'} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const AnecdoteQuotes = ({ quote, author }) => {
  return (
    <div>
      <Heading text={'quotes'} />
      <p>{quote}</p>
      <p>-- {author}</p>
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
  let [selected, setSelected] = useState(0);

  const anecdotes = [
    {
      'Brooks Law':
        '"Adding manpower to a late software project makes it later!"',
    },
    {
      'Fred Brooks':
        '"How does a project get to be a year late?... One day at a time."',
    },
    {
      'Martin Fowler':
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
    },
    {
      Anonymous:
        '"The goal of Computer Science is to build something that will last at least until we\'ve finished building it."',
    },
    {
      'Frederick P. Brooks':
        '"Good judgment comes from experience, and experience comes from bad judgment."',
    },
    {
      'Austin Freeman': '"Simplicity is the soul of efficiency."',
    },
    {
      'Bill Langely':
        '"The perfect project plan is possible if one first documents a list of all the unknowns."',
    },
    {
      'Niklaus Wirth':
        '"Wirth\'s Law - Software gets slower faster than hardware gets faster."',
    },
    {
      Anonymous:
        '"Better train people and risk they leave - than do nothing and risk they stay."',
    },
  ];

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
      <br />
      <AnecdoteQuotes
        quote={Object.values(anecdotes[selected])}
        author={Object.keys(anecdotes[selected])}
      />
      <Button
        handleClick={() => {
          setSelected((selected = Math.floor(Math.random() * 9)));
        }}
        text={'Generate a Quote'}
        style={{ topPadding: '10px' }}
      />
    </div>
  );
}

export default App;
