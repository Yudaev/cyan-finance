import {
  init,
} from '../actions/app';
import { logout, reset as resetUser } from "../actions/user";
import { loadOperations } from "../actions/operations";


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case init.toString():
      store.dispatch(loadOperations({ pageSize: 0 }));
      break;
    case logout.toString():
      store.dispatch(resetUser());
      break;
    default:
      break;
  }
}