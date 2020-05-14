import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import welcome from "./pages/js/welcome";
import home from "./pages/js/home";
import page1 from "./pages/js/page1";
import Nav from "./components/js/nav";
import Clock from "./pages/js/clock";
import DynamicPage from './pages/js/DynamicPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/welcome" component={welcome} />
        <Route path="/clock" component={Clock} />
        <Route path="/home" component={home} />
        <Route path="/page1" component={page1} />
        <Route path="/dynamic/:name" component={DynamicPage} />
      </Router>
    </div>
  );
}

export default App;
