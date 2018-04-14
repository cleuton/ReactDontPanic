import fetch from 'cross-fetch';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

// Action creators:

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

function receiveLogin(rjson) {
    return {
        type: RECEIVE_LOGIN,
        dados: rjson
    }
}

// Thunk action:

const url = 'http://localhost:5000';

export function fetchLogin(usuario,senha) {
    return function (dispatch) {
        console.log('invoked!!!')
        dispatch(requestLogin())
        console.log('fetching...'+usuario+','+senha)
        var form = [];
        form.push('usuario='+usuario)
        form.push('senha='+senha)
        return fetch(url,{
            'method': 'POST',
            'headers': {
                'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            'body': form.join('&')         
        })
          .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
          )
          .then(json => {
                console.log('again! ' + JSON.stringify(json))
                dispatch(receiveLogin(json))
            }
          )
      }
}