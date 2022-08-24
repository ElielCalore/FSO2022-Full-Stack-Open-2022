import { useState } from "react";

function StatisticLine(props) {
  return (
    <div>
      <strong>{props.text} : </strong> {props.value}
    </div>
  );
}
function Button(props) {
  return (
    <div>
      <button onClick={props.handleButton}>{props.text}</button>
    </div>
  );
}

function Statistics({ cafe }) {
  const average = (cafe.good + cafe.bad * -1) / cafe.all;
  const positive = (cafe.good / cafe.all) * 100;
  console.log(average);
  return (
    <div>
      {cafe.all === 0 ? (
        <div>No Feedback given</div>
      ) : (
        <div>
          <StatisticLine text={"Good"} value={cafe.good} />
          <StatisticLine text={"Neutral"} value={cafe.neutral} />
          <StatisticLine text={"Bad"} value={cafe.bad} />
          <StatisticLine text={"All"} value={cafe.all} />
          <StatisticLine text={"Average"} value={average} />
          <StatisticLine text={"Positive"} value={positive} />
        </div>
      )}
    </div>
  );
}

export function App() {
  const [cafe, setCafe] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });

  const addGood = () =>
    setCafe({ ...cafe, good: cafe.good + 1, all: cafe.all + 1 });
  const addNeutral = () =>
    setCafe({ ...cafe, neutral: cafe.neutral + 1, all: cafe.all + 1 });
  const addBad = () =>
    setCafe({ ...cafe, bad: cafe.bad + 1, all: cafe.all + 1 });
  /*
  const Statistics = ({ cafe }) =>
    setCafe({ ...cafe, average: cafe.good + cafe.bad * -1 });

  const Positive = () =>
    setCafe({ ...cafe, positive: (cafe.good / cafe.all) * 100 });
*/
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleButton={addGood} text="Good" />
        <Button handleButton={addNeutral} text="Neutral" />
        <Button handleButton={addBad} text="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics cafe={cafe} />
      </div>
    </div>
  );
}

/*
function Hello({ name, age }) {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} year old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
}
const NewHello = (who) => () => {
  console.log("hello world", who);
};

const Button = (props) => (
  <button onClick={props.handleCLick}>{props.text}</button>
);

const Display = (props) => <div>{props.value}</div>;

export function App() {
  const [counter, setCounter] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  const name = "Peter";
  const age = 27;

  const handleLeftClick = () => {
    allClicks.push("L");
    setAll(allClicks);
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    allClicks.push("R");
    setAll(allClicks);
    setRight(right + 1);
  };

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>the app is used by pressing the buttons</div>;
    }
    return <div>button press history: {props.allClicks.join(" ")}</div>;
  };

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <div> counter ={counter} </div>
      <div>
        <Button onClick={increaseByOne} text={"+"} />
        <Button onClick={decreaseByOne} text={"-"} />
        <Button onClick={setToZero} text={"0"} />
      </div>
      <div>
        <Display counter={counter} />
      </div>
      <div>
        {left}
        <button onClick={handleLeftClick} text="left">
          Left
        </button>
        <button onClick={handleRightClick} text="right">
          Right
        </button>
        {right}
        <p>{allClicks.join("")}</p>
      </div>
      <div>
        <History allClicks={allClicks} />
      </div>
      <div>
        <button onClick={NewHello("world")}>World</button>
        <button onClick={NewHello("react")}>React</button>
        <button onClick={NewHello("function")}>Function</button>
      </div>
      <div>
        {value}
        <button onClick={() => setToValue(1000)}>thousand</button>
        <button onClick={() => setToValue(0)}>reset</button>
        <button onClick={() => setToValue(value + 1)}>increment</button>
      </div>
      <div>
        <Display value={value} />
        <Button handleCLick={() => setToValue(1000)} text="thousand" />
        <Button handleCLick={() => setToValue(0)} text="reset" />
        <Button handleCLick={() => setToValue(value + 1)} text="increment" />
      </div>
    </div>
  );
}
*/
