import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import WinnersName from './components/pages/WinnersName';
import Yearfilter from './components/pages/YearFilter';
import Home from './components';
import YearCategory from './components/pages/YearCategory';
import SortName from './components/pages/SortName';
function App() {



  return (
    <Router>
       <Switch>   
       <Route  exact component={Home} path="/"/>
       <Route  component={WinnersName} path="/search_name"/>
       <Route  component={Yearfilter} path="/year"/>
       <Route  component={YearCategory} path="/year&category"/>
       <Route  component={SortName} path="/sortname"/>
       </Switch>
    </Router>

  );
}

export default App;
