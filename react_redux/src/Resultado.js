import React, { Component } from 'react';

class Resultado extends React.Component {
    constructor(props) {
      super(props);
      this.state = {'dados' : props.dados}
    }

    render() {
      return (
        <table border='1'>
          <tbody>
            <tr><td>IP</td><td>{this.state.dados.ip}</td></tr>
            <tr><td>Hostname</td><td>{this.state.dados.hostname}</td></tr>
            <tr><td>Cidade</td><td>{this.state.dados.city}</td></tr>
            <tr><td>Regi&atilde;o</td><td>{this.state.dados.region}</td></tr>
            <tr><td>Pa&iacute;s</td><td>{this.state.dados.country}</td></tr>
            <tr><td>Loc</td><td>{this.state.dados.loc}</td></tr>
            <tr><td>Organiza&ccedil;&atilde;o</td><td>{this.state.dados.org}</td></tr>
          </tbody>
        </table>
      )
    }
}

export default Resultado;