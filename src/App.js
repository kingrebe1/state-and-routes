import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import { GlobalContextProvider } from "./context/Context";

import welcome from "./pages/js/welcome";
import home from "./pages/js/home";
import page1 from "./pages/js/page1";
import Nav from "./components/js/nav";
import Clock from "./pages/js/clock";
import ClockWithHooks from './pages/js/ClockWithHooks';
import DynamicPage from './pages/js/DynamicPage';
import DarkMode from './pages/js/DarkMode';


function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Router>
          <Nav />
          <Route path="/welcome" component={welcome} />
          <Route path="/clock" component={Clock} />
          <Route path="/ClockWithHooks" component={ClockWithHooks} />
          <Route path="/darkmode" component={DarkMode} />
          <Route path="/home" component={home} />
          <Route path="/page1" component={page1} />
          <Route path="/dynamic/:name" component={DynamicPage} />
        </Router>
      </div>
     </GlobalContextProvider> 
  );
}

export default App;
