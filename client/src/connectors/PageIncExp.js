import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from "../actions/operations";
import PageIncExp from "../components/PageIncExp/PageIncExp";

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addOperation: data => addItem(data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageIncExp);
