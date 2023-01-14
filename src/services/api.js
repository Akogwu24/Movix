import axios from 'axios';
export * from './routes.constants';

const axiosInstance = axios.create({
  baseURL: 'https://loanappbackend-production.up.railway.app/api/v1',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-headers': 'Content-Type',
  },
});

const addToekenToRequest = async (req) => {
  const token = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)?.admin?.data?.token || null;
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addToekenToRequest);

export default axiosInstance;
