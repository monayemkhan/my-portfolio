import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';
import Project from './Component/Pages/Project/Project';
import Projects from './Component/Pages/Projects/Projects';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/project">
            <Project></Project>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
