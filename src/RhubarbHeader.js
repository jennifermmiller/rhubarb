import React from 'react';
import rhubarb from './rhubarb.png';
import './RhubarbHeader.css';

const RhubarbHeader = () => (
  <header className="rhubarb-header">
    <h1>
      <a href="https://en.wikipedia.org/wiki/Walla" target="_blank">
        <img src={rhubarb} className="rhubarb-logo" alt="logo" />
        Rhubarb
      </a>
    </h1>
  </header>
);

export default RhubarbHeader;
