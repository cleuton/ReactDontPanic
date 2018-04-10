import React, { Component } from 'react';
import Resultado from './Resultado';

const Botao = ({dados,click}) => (
  <div>
    <button onClick={click}>
      Pesquisar
    </button>
    {dados != null &&
      <Resultado dados={dados} />
    }
    <hr/> 
  </div>
);

export default Botao;

