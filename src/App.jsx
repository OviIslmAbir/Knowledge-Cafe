import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Question from './components/Question/Question';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <Question></Question>
    </div>

  )
}

export default App;

