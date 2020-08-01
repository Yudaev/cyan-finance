import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAuthError, getRegError } from "../selectors/user";
import { auth, reg, clearAuthError, clearRegError } from "../actions/user";
import RegAuthPage from "../components/RegAuthPage/RegAuthPage";

const mapStateToProps = (store) => ({
  authError: getAuthError(store),
  regError: getRegError(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onSubmitAuthForm: (email, password) => auth({ email, password }),
  onSubmitRegForm: (email, password, password2) => reg({ email, password, password2 }),
  clearAuthError: () => clearAuthError(),
  clearRegError: () => clearRegError(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegAuthPage);
