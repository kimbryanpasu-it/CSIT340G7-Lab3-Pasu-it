import Footer from './components/Footer';

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises} units
    </p>
  );
};

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Application Development',
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer 
        fullName="Kim Bryan E. Pasu-it" 
        courseCode="CSIT340" 
        section="G7" 
      />
    </div>
  );
};

export default App;