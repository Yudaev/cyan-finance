import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OperationsPage from "../components/OperationsPage/OperationsPage";
import { getGroupsByDate } from "../selectors/operations";
import { getCategoryListAsObject, getCategoryList } from "../selectors/categories";
import {logout} from "../actions/user";
import {updateItem, deleteItem} from "../actions/operations";

const mapStateToProps = (store) => ({
  groups: getGroupsByDate(store),
  categories: getCategoryListAsObject(store),
  categoriesList: getCategoryList(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onUpdateItem: (item) => updateItem(item),
  onDeleteItem: (item) => deleteItem(item),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OperationsPage);
