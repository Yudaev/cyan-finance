import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../actions/operations';
import SettingsPage from '../components/SettingsPage/SettingsPage';
import { getRepetitiveOperations } from '../selectors/operations';
import {
  getCategoryList,
  getCategoryListAsObject 
} from '../selectors/categories';

const mapStateToProps = (store) => ({
  repetitiveOperations: getRepetitiveOperations(store),
  categories: getCategoryList(store),
  categoriesAsObject: getCategoryListAsObject(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addRepetitiveOperation: data => addItem(data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
