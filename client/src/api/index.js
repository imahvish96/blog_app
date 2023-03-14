import httpClient from "./base";

async function fetchAllPostApi() {
  try {
    const post = await httpClient.get("/blogpost", { withCredentials: true });
    return post.data;
  } catch (error) {
    console.log(error);
    return [{}];
  }
}

function fetchPostById() {
  const onePost = httpClient
    .get(`/blogpost/${localStorage.getItem("pidt")}`, { withCredentials: true })
    .then((res) => {
      const singleBlog = res.data;
      return singleBlog;
    })
    .catch((error) => {
      console.log(error);
    });

  return onePost;
}

async function saveNewPost(data, config) {
  try {
    await httpClient.post("/blogpost/newpost", data, config);
  } catch (error) {
    console.log(error);
  }
}

async function getLogedIn(data) {
  const isLoggin = httpClient
    .post("/auth/login", { ...data })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => console.error(err));
  return isLoggin;
}

async function getRefreshToken() {
  await httpClient.get("/blogpost/refresh").catch((error) => {
    console.log(error);
  });
}

async function signOut() {
  const res = await httpClient.get("/auth/logout").catch((error) => {
    console.log("lougOut Error", error);
  });
  return res;
}

export {
  fetchAllPostApi,
  fetchPostById,
  saveNewPost,
  getLogedIn,
  getRefreshToken,
  signOut,
};
