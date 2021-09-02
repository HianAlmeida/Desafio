import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Beneficios from './components/Beneficios';

import Vibe from './components/Vibe';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Beneficios" exact component={Beneficios} />
          <Route path="/Beneficios/Vibe" exact component={Vibe} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
