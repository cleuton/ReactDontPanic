import { connect } from 'react-redux'
import { fetchIp } from './Actions'
import Presentational from './Presentational'

const mapStateToProps = state => (
  {dados: state.dados}
);

const mapDispatchToProps = dispatch => ({
  clickBotao: () => dispatch(fetchIp())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational)
