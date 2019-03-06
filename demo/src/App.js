import React, {Suspense, lazy} from 'react';
import { Router } from "@reach/router";

import NavLink from './NavLink';

import './App.css';

import Spinner from './Spinner'

// import Profile from './Profile';
// import Albums from './Albums';
// import Voting from './Voting';
const Profile = lazy(() => import('./Profile'))
const Albums = lazy(() => import('./Albums'))
const Voting = lazy(() => import('./Voting'))

function App() {
  return (
    <div className="app">
      <h1 className="coldpedia-title">COLDPEDIA</h1>
      <Suspense fallback={<Spinner />} maxDuration={500}>
        <nav>
          <NavLink to="/">Profile</NavLink>
          <NavLink to="albums">Albums</NavLink>
          <NavLink to="voting">Voting</NavLink>
        </nav>
        <Router>
          <Profile path="/" />
          <Albums path="albums" />
          <Voting path="voting" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
