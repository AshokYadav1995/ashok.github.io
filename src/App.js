import React from 'react';
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route,

} from "react-router-dom";


import './App.css';
import Home from './components/home';
import TopNav from './components/TopNav';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <Router>
    <div className="App">
     
     <TopNav/>
     <Switch>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Experience" element={<Experience></Experience>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
