import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import dayjs from "dayjs";
import { addItem } from "../actions/operations";
import PageIncExp from "../components/PageIncExp/PageIncExp";
import { getCategoryList } from "../selectors/categories";
import {
  getAddItemsStatus,
  getBudgetByCurrentMonth,
  getExpenseByCurrentDay,
  getExpenseByCurrentMonth
} from "../selectors/operations";


const mapStateToProps = (store) => ({
  categories: getCategoryList(store),
  addItemStatus: getAddItemsStatus(store),
  expenseOfMonth: getExpenseByCurrentMonth(store),
  expenseOfDay: getExpenseByCurrentDay(store),
  budgetOfMonth: getBudgetByCurrentMonth(store),
  currentMonth: dayjs().format('MMMM'),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addOperation: data => addItem(data)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageIncExp);
