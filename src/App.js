import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import CSStransition from './components/CSStransition';
import Tgroup from './components/Tgroup';
import TransitionComp from './components/Transition';
import HomeComp from './components/home';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/csstransition">CSStransition</Link>
          <Link to="/tgroup">Transitions group</Link>
          <Link to="/">Home</Link>
        </div>
        <Route path="/transition" component={TransitionComp}></Route>
        <Route path="/csstransition" component={CSStransition}></Route>
        <Route path="/tgroup" component={Tgroup}></Route>
        <Route path="/" component={HomeComp} exact></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
