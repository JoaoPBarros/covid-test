import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import covidContext from './Context/CovidContext';

ReactDOM.render(
  <covidContext.Provider>
    <App />
  </covidContext.Provider>,
  document.getElementById('root')
);

