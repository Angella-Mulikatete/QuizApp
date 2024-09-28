
import './App.css'
import Question from './components/Question';



function App() {
 

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>Welcome to the Quiz App!</h1>
          <p>Select the correct answer to each question.</p>
          <Question content= "What is your favourite Food"/>
          
        </div>
      </div>
    </>
  );
}

export default App
