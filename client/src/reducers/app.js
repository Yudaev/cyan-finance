import {handleActions} from 'redux-actions';

import {
  init,
} from '../actions/app';


const initialState = {
  init: false,
  test: '',
};

export default handleActions({
  [init]: (store, action) => {
    return {
      ...store,
      init: true,
      test: 'text when init complete',
    }
  },
}, initialState);
