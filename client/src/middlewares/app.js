import {
  init,
} from '../actions/app';
import { logout, reset as resetUser } from "../actions/user";


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case init.toString():
      console.log('init app middleware');
      break;
    case logout.toString():
      store.dispatch(resetUser());
      break;
    default:
      break;
  }
}