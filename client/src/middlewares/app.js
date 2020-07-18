import {
  init,
} from '../actions/app';
import { logout, reset as resetUser } from "../actions/user";
import { loadOperations } from "../actions/operations";
import { loadList as loadCategories } from "../actions/categories";


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case init.toString():
      store.dispatch(loadOperations({ pageSize: 0 }));
      store.dispatch(loadCategories());
      break;
    case logout.toString():
      store.dispatch(resetUser());
      break;
    default:
      break;
  }
}