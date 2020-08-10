import axios from "axios";
import config from '../config.js';

export const getAxios = token => Axios(token);

function Axios (token) {
  if (!Axios.instance) {
    Axios.instance = {};
  }
  if (!Axios.instance[token]) {
    Axios.instance[token] = axios.create({
      baseURL: config.apiUrl,
      timeout: 4000,
      headers: token
        ? {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
        : {
          'Content-Type': 'application/json',
        }
    });
  }
  return Axios.instance[token];
}