import {
  init,
} from '../actions/app';


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case init.toString():
      console.log('init app middleware', state);
      break;
    default:
      break;
  }
}