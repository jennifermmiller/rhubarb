import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import RhubarbHeader from './RhubarbHeader';

const App = ({children}) => (
  <div className="App">
    <RhubarbHeader />
    <div className="App-body">{children}</div>
  </div>
);

export default App;
