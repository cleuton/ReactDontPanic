import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor="usuario">Usuário:</label>
                <Field name="usuario" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <Field name="senha" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>  
        </div>
    </form>
  </div>
)
}

export default reduxForm({
    form: 'login'
})(LoginForm)
