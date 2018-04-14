import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import App from './App';
import atualizarDados from './Reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    estado: atualizarDados,
    form: formReducer
});
  
const store = createStore(rootReducer,
    applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

