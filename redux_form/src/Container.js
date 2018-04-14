import { connect } from 'react-redux'
import { fetchLogin } from './Actions'
import Presentational from './Presentational'

const mapStateToProps = state => {
  return {dados: state.estado.dados}
};

const mapDispatchToProps = dispatch => ({
  procsubmit: (values) => {
    console.log("Dispatch: " + values)
    dispatch(fetchLogin(values.usuario,values.senha))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
