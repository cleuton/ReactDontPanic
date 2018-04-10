import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './Botao';

const Presentational = (props) => {
  console.log('Presentational props: ' + JSON.stringify(props));
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React/Redux</h1>
    </header>
    <Botao dados={props.dados} click={props.clickBotao} />
  </div>)
}



export default Presentational;