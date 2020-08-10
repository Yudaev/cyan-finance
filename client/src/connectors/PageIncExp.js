import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from "../actions/operations";
import PageIncExp from "../components/PageIncExp/PageIncExp";
import { getCategoryList } from "../selectors/categories";
import { getAddItemsStatus } from "../selectors/operations";

const mapStateToProps = (store) => ({
  categories: getCategoryList(store),
  addItemStatus: getAddItemsStatus(store),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addOperation: data => addItem(data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageIncExp);
