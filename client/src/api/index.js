import httpClient from "./base";

async function fetchAllPostApi() {
  try {
    const post = await httpClient.get("/blogpost");
    return post.data;
  } catch (error) {
    console.log(error);
    return [{}];
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

export { fetchAllPostApi, fetchPostById, saveNewPost };
