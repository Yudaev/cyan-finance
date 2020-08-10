import {
  loadList,
  failureList,
  requestList,
  successList,
  addItem,
  failureItem,
  requestItem,
  successItem,
} from "../actions/categories";
import { getAxios } from "../services/axios-singleton";
import { getToken } from "../selectors/user";

export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case loadList.toString():
      store.dispatch(requestList());
      store.dispatch(await fetchList(state, action));
      break;
    case addItem.toString():
      store.dispatch(requestItem());
      store.dispatch(await postItem(state, action));
      break;
    default:
      break;
  }
}

export const fetchList = async (state, action) => {
  const token = getToken(state);
  const axios = getAxios(token);

  try {
    const response = await axios.get('/categories');
    return {
      type: successList.toString(),
      payload: response.data
    };
  } catch (error) {
    const { data } = error.response || {};
    console.error(data && data.message);
    return failureList((data && data.message) || 'Connect error. Try later');
  }
};

export const postItem = async (state, action) => {
  const token = getToken(state);
  const axios = getAxios(token);

  try {
    const response = await axios.post('/categories', action.payload);
    return {
      type: successItem.toString(),
      payload: response.data
    };
  } catch (error) {
    const { data } = error.response || {};
    console.error(data && data.message);
    return failureItem(data || { message: 'Connect error. Try later' });
  }
};