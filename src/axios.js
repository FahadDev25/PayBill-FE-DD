import axios from "axios";
axios.defaults.baseURL = "http://192.168.18.35:4000/api/v1";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default axios;
