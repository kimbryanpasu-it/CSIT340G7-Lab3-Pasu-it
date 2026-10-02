import Footer from './components/Footer';

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises} units
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  );
};

const App = () => {
  const course = 'Application Development';
  const part1 = {
    name: 'Software Development',
    exercises: 3,
  };
  const part2 = {
    name: 'UML Diagram',
    exercises: 3,
  };
  const part3 = {
    name: 'Software Engineering',
    exercises: 3,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer 
        fullName="Kim Bryan E. Pasu-it" 
        courseCode="CSIT340" 
        section="G7" 
      />
    </div>
  );
};

export default App;