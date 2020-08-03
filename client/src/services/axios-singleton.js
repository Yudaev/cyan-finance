import axios from "axios";

export const getAxios = token => Axios(token);

function Axios (token) {
  if (!Axios.instance) {
    Axios.instance = {};
  }
  if (!Axios.instance[token]) {
    Axios.instance[token] = axios.create({
      baseURL: 'http://localhost:8000/',
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