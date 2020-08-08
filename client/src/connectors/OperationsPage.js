import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OperationsPage from "../components/OperationsPage/OperationsPage";
import { getGroupsByDate, getValuesByMonth } from "../selectors/operations";
import { getCategoryListAsObject, getCategoryList } from "../selectors/categories";
import { updateItem, deleteItem, saveHistoryDate } from "../actions/operations";

const mapStateToProps = (store) => ({
  groups: getGroupsByDate(store),
  categories: getCategoryListAsObject(store),
  categoriesList: getCategoryList(store),
  stats: getValuesByMonth(store)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onUpdateItem: (item) => updateItem(item),
  onDeleteItem: (item) => deleteItem(item),
  onChangeDate: date => saveHistoryDate(date),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage);
