 import React from 'react';
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';

import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';

function App() {
    
  return (
<Router>
  <div>
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
        {/* Add more nav items as needed */}
      </ul>
    </nav>

    {/* <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/experience" component={Experience} />
      {/* Add more routes for additional pages 
    </Switch>
     */}
    <BrowserRouter>  {/* Setting up BrowserRouter to enable routing in the app*/}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/BusinessPage" element={<BusinessPage />}></Route>
        <Route path="/CoursesPage" element={<CoursesPage />}></Route>
        <Route path="/DegreesPage" element={<DegreesPage />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
</Router>


);
}

export default App;