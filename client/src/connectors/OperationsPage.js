import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OperationsPage from "../components/OperationsPage/OperationsPage";
import { getGroupsByDate } from "../selectors/operations";
import { getCategoryListAsObject } from "../selectors/categories";
import { getAllTimeStats } from "../selectors/operations";

const mapStateToProps = (store) => ({
  groups: getGroupsByDate(store),
  categories: getCategoryListAsObject(store),
  types: getAllTimeStats(store)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage);
