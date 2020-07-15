import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OperationsPage from "../components/OperationsPage/OperationsPage";
import { getGroupsByDate } from "../selectors/operations";

const mapStateToProps = (store) => ({
  groups: getGroupsByDate(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage);
