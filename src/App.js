import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';
import About from './Component/Pages/About/About';
import Blogs from './Component/Pages/Blogs/Blogs';
import Contact from './Component/Pages/Contact/Contact';
import Project from './Component/Pages/Project/Project';
import Projects from './Component/Pages/Projects/Projects';
import Resume from './Component/Pages/Resume/Resume';

function App() {
  return (
    <div>
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
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
