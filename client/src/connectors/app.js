import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTestText } from "../selectors/app";
import { App } from "../components/app";
import { getIsAuth } from "../selectors/user";
import { logout } from "../actions/user";

const mapStateToProps = (store) => ({
  isAuth: getIsAuth(store),
  test: getTestText(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: () => logout()
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
