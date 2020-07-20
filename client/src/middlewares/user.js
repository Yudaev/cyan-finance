import { getAxios } from "../services/axios-singleton";
import {
  auth,
  requestAuth,
  successAuth,
  failureAuth,
  reg,
  requestReg,
  successReg,
  failureReg, clearAuthError, clearRegError,
} from '../actions/user';

export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case auth.toString():
      store.dispatch(requestAuth());
      store.dispatch(clearAuthError());
      store.dispatch(await authorization(state, action));
      break;
    case reg.toString():
      store.dispatch(requestReg());
      store.dispatch(clearRegError());
      store.dispatch(await registration(state, action));
      break;
    default:
      break;
  }
}

export const authorization = async (state, action) => {
  const { email, password } = action.payload;
  const axios = getAxios();
  try {
    const response = await axios.post('/auth', {
      email,
      password,
    });
    return {
      type: successAuth.toString(),
      payload: response.data
    };
  } catch (error) {
    const { data } = error.response || {};
    return failureAuth((data && data.message) || 'Connect error. Try later');
  }
};

export const registration = async (state, action) => {
  const { email, password, password2 } = action.payload;
  const axios = getAxios();
  try {
    const response = await axios.post('/reg', {
      email,
      password,
      password2,
    });
    return {
      type: successReg.toString(),
      payload: response.data
    };
  } catch (error) {
    const { data } = error.response || {};
    return failureReg((data && data.message) || 'Connect error. Try later');
  }
};
