import React from 'react';
import './App.css';
import LoginForm from './LoginForm'

const Presentational = (props) => {
  const { procsubmit } = props
  const submit = values => {procsubmit(values)}
  console.log("Pres:"+JSON.stringify(props.dados))
  return (
  <div className="App">
    {
      props.dados != null &&
      <p>Usuário: {props.dados.user} </p>
    }
    {
      props.dados == null &&
      <LoginForm onSubmit={submit} />
    }    
  </div>)
}

export default Presentational;