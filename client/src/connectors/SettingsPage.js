import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addItem, deleteItem, updateItem} from '../actions/operations';
import SettingsPage from '../components/SettingsPage/SettingsPage';
import { getRepetitiveOperations } from '../selectors/operations';
import {
  getCategoryList,
  getCategoryListAsObject 
} from '../selectors/categories';

const mapStateToProps = (store) => ({
  repetitiveOperations: getRepetitiveOperations(store),
  categories: getCategoryList(store),
  categoriesList: getCategoryList(store),
  categoriesAsObject: getCategoryListAsObject(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onUpdateItem: (item) => updateItem(item),
  onDeleteItem: (item) => deleteItem(item),
  addOperation: data => addItem(data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
