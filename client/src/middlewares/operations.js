import { failureOperations, loadOperations, requestOperations, successOperations } from "../actions/operations";
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