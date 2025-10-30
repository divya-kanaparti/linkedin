// import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const api = axios.create({ baseURL: API_BASE });

// export const setAuthToken = (token) => {
//   if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   else delete api.defaults.headers.common['Authorization'];
// };

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 backend server URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
