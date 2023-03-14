import axios from "axios";
axios.defaults.withCredentials = true;
export default axios.create({
  withCredentials: true,
  baseURL: "http://127.0.0.1:4000",
});
