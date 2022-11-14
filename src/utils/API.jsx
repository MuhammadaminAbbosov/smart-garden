import axios from "axios";

const defaultOptions = {
  baseURL: "https://smartgarden.pythonanywhere.com",
  headers: {
    "Content-Type": "application/json",
  },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

export default API;
