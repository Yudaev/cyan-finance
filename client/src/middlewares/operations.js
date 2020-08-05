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
import {
  postItem as postCategoryItem,
} from "./categories";
import { getAxios } from "../services/axios-singleton";
import { getToken } from "../selectors/user";

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
      const { category } = action.payload;
      if(category && category.title && !category._id) {
        const newCategoryAction = await postCategoryItem(state, { payload: { title: category.title }});
        store.dispatch(newCategoryAction);
        action.payload.category = newCategoryAction.payload;
      }
      store.dispatch(await postItem(state, action));
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

export const postItem = async (state, action) => {
  const token = getToken(state);
  const axios = getAxios(token);
  const params = action.payload;

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