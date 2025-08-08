const Header = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  );
};
const App = () => {
  const contents = [
    { part: "Fundamentals of React", exercise: 10 },
    { part: "Using props to pass data", exercise: 7 },
    { part: "State of a component", exercise: 14 },
  ];
  return (
    <div>
      <Header />
      <Content
        part1={contents[0].part}
        exercise1={contents[0].exercise}
        part2={contents[1].part}
        exercise2={contents[1].exercise}
        part3={contents[2].part}
        exercise3={contents[2].exercise}
      />
      <Total
        exercise1={contents[0].exercise}
        exercise2={contents[1].exercise}
        exercise3={contents[2].exercise}
      />
    </div>
  );
};

export default App;
