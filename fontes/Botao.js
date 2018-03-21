import React, { Component } from 'react';
import Resultado from './Resultado';

class Botao extends React.Component {
    constructor(props) {
      super(props);
      this.state = {'dados' : props.resultado};
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

      fetch('http://ipinfo.io/json'
    )
      .then(response => response.json())
      .then(rjson => {
        this.setState({'dados':rjson})
      })


    }

    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            Pesquisar
          </button>
          {this.state.dados != null &&
            <Resultado dados={this.state.dados} />
          }
          <hr/> 
        </div>
      );
    }
  }

export default Botao;