import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from "../selectors/user";
import { logout } from "../actions/user";
import ProfilePage from "../components/ProfilePage/ProfilePage";

const mapStateToProps = (store) => ({
  user: getUser(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: () => logout()
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
