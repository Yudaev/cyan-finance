import axios from "axios";

export const getAxios = () => Axios();

function Axios () {
  if (!Axios.instance) {
    Axios.instance = axios.create({
      baseURL: '/api/',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  return Axios.instance;
}