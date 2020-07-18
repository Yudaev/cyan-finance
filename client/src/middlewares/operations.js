import {
  loadOperations,
  failureOperations,
  requestOperations,
  successOperations,
  addItem,
  failureItem,
  requestItem,
  successItem,
} from "../actions/operations";
import { getAxios } from "../services/axios-singleton";
import { getToken } from "../selectors/user";
import omit from 'lodash/omit';


export default store => next => async action => {
  next(action);
  const state = store.getState();

  switch(action.type) {
    case loadOperations.toString():
      store.dispatch(requestOperations());
      store.dispatch(await fetchOperations(state, action));
      break;
    case addItem.toString():
      store.dispatch(requestItem());
      store.dispatch(await fetchItem(state, action));
      break;
    default:
      break;
  }
}

export const fetchOperations = async (state, action) => {
  const token = getToken(state);
  const axios = getAxios(token);
  const params = action.payload;
  try {
    const response = await axios.get('/operations', { params });
    return {
      type: successOperations.toString(),
      payload: response.data
    };
  } catch (error) {
    const { data } = error.response || {};
    console.error(data && data.message);
    return failureOperations((data && data.message) || 'Connect error. Try later');
  }
};

export const fetchItem = async (state, action) => {
  const token = getToken(state);
  const axios = getAxios(token);
  // временно не передаем категорию. @todo: реализовать создание категории
  const params = omit(action.payload, ['category']);

  try {
    const response = await axios.post('/operations', params);
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