import {
  init
} from '../actions/app';
import { logout, reset as resetUser, successAuth, successReg } from "../actions/user";
import { loadOperations, clearOperationsData } from "../actions/operations";
import { loadList as loadCategories, clearCategoriesData } from "../actions/categories";
import { getIsAuth } from "../selectors/user";


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case init.toString():
      const isAuth = getIsAuth(state);
      if(isAuth) {
        store.dispatch(loadOperations({ pageSize: 0 }));
        store.dispatch(loadCategories());
      }
      break;
    case logout.toString():
      store.dispatch(resetUser());
      store.dispatch(clearOperationsData());
      store.dispatch(clearCategoriesData());
      break;
    case successReg.toString():
    case successAuth.toString():
      store.dispatch(loadOperations({ pageSize: 0 }));
      store.dispatch(loadCategories());
      break;
    default:
      break;
  }
}