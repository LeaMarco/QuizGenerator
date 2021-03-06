import './App.css';
import CreateQuiz from './components/createQuiz/createQuiz';
import ViewQuiz from './components/detailQuiz/viewQuiz';
import Home from './components/home/home';
import {
  Route,
  Switch,
} from "react-router-dom";
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/create" component={CreateQuiz} />
      <Route path="/detail/:id" component={ViewQuiz} />
      <Route path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
