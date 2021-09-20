import logo from './logo.svg';
import './App.css';
import CreateQuiz from './components/Create/createQuiz';
import ViewQuiz from './components/Quiz/viewQuiz';
import {
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/create" component={CreateQuiz} />
      <Route path="/detail/:id" component={ViewQuiz} />
      </Switch>

    </div>
  );
}

export default App;
