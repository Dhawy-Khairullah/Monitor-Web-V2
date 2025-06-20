import axios from "axios";

const instance = axios.create({
  baseURL: "http://http://103.127.98.204/",
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
