import axios from "axios";

let baseURL: string;
baseURL = process.env.BASEURL || 'https://swapi.dev/api/';

let Axios: any = axios;
const init = () => {
  Axios = axios.create({
    baseURL: baseURL,
    timeout: 60000,
  });
  Axios.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
  Axios.interceptors.response.use(handleSuccess, handleError);
};

const handleSuccessRequest = (request: any) => {
  return request;
};

const handleErrorRequest = (error: any) => {
  return Promise.reject(error);
};

const handleSuccess = (response: any) => {
  return response;
};

const handleError = (error: any) => {
  return Promise.reject(error.response);
};

init();

export default Axios;