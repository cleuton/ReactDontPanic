import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Botao from './Botao'
import ReactTestUtils from 'react-dom/test-utils'; 
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { expect } from 'chai';

describe('Teste da interface', () => {
  it('deve aparecer o botão Pesquisar, sem erros', () => {
    // Sem enzyme: 
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    const buttons = div.getElementsByTagName("button");
    //console.log(buttons[0].firstChild.data);
    expect(buttons[0].firstChild.data).to.be.equal('Pesquisar');
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Ao ser clicado, deve retornar uma tabela', () =>{
    // com enzyme:
    configure({ adapter: new Adapter() });
    const wrapper = mount(
      <Botao resultado={null} />
    );
    const botao = wrapper.find('button');
    botao.simulate('click');
    expect(wrapper.find('table')).to.have.length(1);
  });
});