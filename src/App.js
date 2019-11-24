import React from 'react';
import './App.css';

import { GitHubRibbon } from './components/GitHubRibbon/GitHubRibbon';
import { Diagram } from './components/Diagram/Diagram'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Salary Comparer
          <GitHubRibbon repository={'https://github.com/krzys1u/salaryComparer'}/>
        </h1>
      </header>
      <Diagram/>
    </div>
  );
}

export default App;
