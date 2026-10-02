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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Application Development';
  const parts = [
    {
      name: 'Software Development',
      exercises: 3,
    },
    {
      name: 'UML Diagram',
      exercises: 3,
    },
    {
      name: 'Software Engineering',
      exercises: 3,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer 
        fullName="Kim Bryan E. Pasu-it" 
        courseCode="CSIT340" 
        section="G7" 
      />
    </div>
  );
};

export default App;