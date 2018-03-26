import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Botao from './Botao'
import ReactTestUtils from 'react-dom/test-utils'; 
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { expect } from 'chai';

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(()=> {
        var p = new Promise((resolve,reject) => {
          const response = function() {return {"ip": "192.168.1.1","hostname": "No Hostname","city": "Rio de Janeiro","region": "Rio de Janeiro","country": "BR","loc": "-22.9876,-43.3207","org": "VIVO"}; }
          resolve({'json':response});
        })
        return p;
      }
    )
  
})

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
  
  it('Ao ser clicado, deve retornar uma tabela',  () =>{
    // com enzyme:
    configure({ adapter: new Adapter() });
    const wrapper = mount(
      <Botao resultado={null} />
    );
    const botao = wrapper.find('button');
    botao.simulate('click');
    setTimeout(function(){
      expect(wrapper.find('table')).to.have.length(1);
    }, 2000);
  
    
  });
});