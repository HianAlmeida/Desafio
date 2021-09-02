import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Beneficios from './components/Beneficios';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Beneficios" exact component={Beneficios} />
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
