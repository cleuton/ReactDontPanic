import {
    REQUEST_LOGIN,
    RECEIVE_LOGIN
  } from './Actions'

const estadoInicial = {
    aguardando: false,
    dados: null
};

function atualizarDados(state = estadoInicial, action) {
    switch(action.type) {
        case REQUEST_LOGIN: 
            return Object.assign({}, state, {
                    aguardando: true,
                    dados: null
                } 
            )
        case RECEIVE_LOGIN: 
            return Object.assign({}, state, {
                aguardando: false,
                dados: action.dados
            })
        default: 
            return state;
    }
}

export default atualizarDados;
