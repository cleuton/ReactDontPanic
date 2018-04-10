import fetch from 'cross-fetch';
export const REQUEST_IP = 'REQUEST_IP';
export const RECEIVE_IP = 'RECEIVE_IP';

// Action creators:

function requestIp() {
    return {
        type: REQUEST_IP
    }
}

function receiveIp(rjson) {
    return {
        type: RECEIVE_IP,
        dados: rjson
    }
}

// Thunk action:

const url = 'http://ipinfo.io/json';
//const url = 'http://localhost:5000';

export function fetchIp() {
    return function (dispatch) {
        console.log('invoked!!!')
        dispatch(requestIp())
        console.log('fetching...')
        return fetch(url)
          .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
          )
          .then(json => {
                console.log('again! ' + JSON.stringify(json))
                dispatch(receiveIp(json))
            }
          )
      }
}