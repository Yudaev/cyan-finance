import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StatisticsPage from "../components/StatisticsPage/StatisticsPage";
import { saveHistoryDate } from "../actions/operations";
import { saveHistoryType } from "../actions/operations";
import { getTypeSwitch, getValuesByType, getGroupByYears, getDate, getOperations } from "../selectors/statistics";
import { getCategoryListAsObject } from "../selectors/categories";


const mapStateToProps = (store) => ({
  operations: getOperations(store),
  categories: getCategoryListAsObject(store),
  yearNow: getDate(store),
  years: getGroupByYears(store),
  stats: getValuesByType(store),
  type: getTypeSwitch(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChangeDate: date => saveHistoryDate(date),
  onChangeType: type => saveHistoryType(type)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
