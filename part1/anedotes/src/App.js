import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onCLick}>{props.text}</button>
    </div>
  );
};

/*
const anecdotesComponent = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>Has {props.</p>
    </div>
  )
}
*/

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const handleClick = () => {
    let generate = Math.floor(Math.random() * anecdotes.length);
    setSelected(generate);
  };

  const handleVote = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 });
  };

  const HandleMaxVote = () => {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
      if (max < points[i]) {
        max = i;
      }
    }
    console.log(max);
    return (
      <div>
        <h1>
          {anecdotes[max]} has {points[max]}
        </h1>
      </div>
    );
  };

  return (
    <div>
      <div>
        {anecdotes[selected]} has {points[selected]} Votes
      </div>

      <div>
        <Button onCLick={handleClick} text="Next Anecdotes">
          next anecdotes
        </Button>
        <Button onCLick={handleVote} text="Vote Anecdotes">
          next anecdotes
        </Button>
      </div>

      <div>
        <h1>Anecdotes with most votes</h1>

        <HandleMaxVote />
      </div>
    </div>
  );
};

export default App;
