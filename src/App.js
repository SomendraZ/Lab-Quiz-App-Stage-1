import './App.css';

import HomeComponents from './Components/HomeComponent';
import QuizComponents from './Components/QuizComponent';
import ResultComponents from './Components/ResultComponent';

function App() {
  return (
    <div className="App">
      <div className='front'>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <HomeComponents />
      </div>
      <div className='mid'>
        <br /><br /><br />
      <QuizComponents />
      </div>
      <div className='end'>
        <br /><br /><br />
      <ResultComponents />
      </div>
    </div>
  );
}


export default App;
