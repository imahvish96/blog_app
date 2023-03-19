import httpClient from "./base";

async function fetchAllPostApi() {
  try {
    const response = await fetch("http://localhost:4000/blogpost", {
      credentials: "include",
    });
    const getPostData = await response.json();
    if (!getPostData?.data?.error) return getPostData;
    // eslint-disable-next-line no-throw-literal
    throw new Error(getPostData.data.error);
  } catch (error) {
    console.log(error);
  }
}

function fetchPostById() {
  const onePost = httpClient
    .get(`/blogpost/${localStorage.getItem("pidt")}`)
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
  // const isLoggin = httpClient
  //   .post("/auth/login", { ...data })
  //   .then((res) => {
  //     console.log(res);
  //     return res.data;
  //   })
  //   .catch((err) => console.error(err));
  try {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const isLogin = await response.json();
    if (!isLogin?.data?.error) return isLogin;
    // eslint-disable-next-line no-throw-literal
    throw new Error(isLogin.data.error);
  } catch (error) {
    console.log(error);
  }

  // const isLogin = fetch("http://localhost:4000/auth/login", {
  //   method: "post",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  // })
  //   .then((res) => res.json())
  //   .then((data) => data);
  // return isLogin;
}

async function getRefreshToken() {
  // await httpClient.get("/blogpost/refresh").catch((error) => {
  //   console.log(error);
  // });
  try {
    const response = await fetch("http://localhost:4000/auth/refresh", {
      credentials: "include",
    });
    const refresheToken = await response.json();
    if (!refresheToken?.data?.error) return refresheToken;
    // eslint-disable-next-line no-throw-literal
    throw new Error(refresheToken.data.error);
  } catch (error) {
    console.log(error);
  }
}

async function signOut() {
  // const res = await httpClient.get("/auth/logout").catch((error) => {});
  // return res;
  try {
    const response = await fetch("http://localhost:4000/auth/logout", {
      credentials: "include",
    });
    const isLogout = await response.json();
    if (!isLogout?.data?.error) return isLogout;
    throw new Error(isLogout.data.error);
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchAllPostApi,
  fetchPostById,
  saveNewPost,
  getLogedIn,
  getRefreshToken,
  signOut,
};
