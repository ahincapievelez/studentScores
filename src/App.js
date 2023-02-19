import './App.css';
import { data } from './data';
import Student from './components/Student';

function App() {

  let studentComponent = data.map((student) => {

    return (
      <Student name={student.name} bio={student.bio} key={student.id} scores={student.scores}/>
    )
  });

  return (
    <div className="App">
      {studentComponent}
    </div>
  );
}

export default App;
