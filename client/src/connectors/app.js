import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {App} from "../components/app";
import { getTestText } from "../selectors/app";

const mapStateToProps = (store) => ({
  test: getTestText(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
