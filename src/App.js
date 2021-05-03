import './App.css';

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Nav user={'larzthimoty@gmail.com'}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
