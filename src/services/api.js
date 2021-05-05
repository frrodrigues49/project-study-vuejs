import axios from "axios";
import store from "@/store";

const api = axios.create({
  baseURL: "http://localhost:8000/"
});

api.interceptors.request.use(async config => {
  // const token = localStorage.getItem("token");
  const token = store.state.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
