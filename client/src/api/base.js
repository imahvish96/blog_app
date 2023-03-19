import axios from "axios";

axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: "http://127.0.0.1:4000",
});

function httpClient(url, body, headerConfig, method) {
  fetch(`http://127.0.0.1:4000${url}`, {
    method: `${method}` || "get",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headerConfig,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}
