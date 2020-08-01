import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OperationsPage from "../components/OperationsPage/OperationsPage";
import { getGroupsByDate } from "../selectors/operations";
import { getCategoryListAsObject } from "../selectors/categories";
import { getValuesByMonth } from "../selectors/operations";
import { saveHistoryDate } from "../actions/operations";


const mapStateToProps = (store) => ({
  groups: getGroupsByDate(store),
  categories: getCategoryListAsObject(store),
  stats: getValuesByMonth(store)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChangeDate: date => saveHistoryDate(date)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage);
