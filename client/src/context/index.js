import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { fetchAllPostApi } from "../api";

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
  };

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));
  const [isToken, setIsToken] = useState(null);

  const fetchPosts = async () => {
    const allPost = await fetchAllPostApi();
    setPosts(allPost);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   const isAuth = localStorage.getItem('token');
  //   if (isAuth && isAuth !== undefined) {
  //     history.push('/');
  //   }
  // }, []);

  const handelDetail = (id) => {
    const post = posts.find((item) => item._id === id);
    localStorage.setItem("pidt", post._id);
    setPost(post);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('/api/login', { ...state })
  //     .then((res) => {
  //       setToken(res.data.token);
  //       localStorage.setItem('token', res.data.token);
  //       props.history.push('/api/writeblog');
  //       // setIsLogin(!isLogin);
  //     })
  //     .catch((err) => console.error(err));
  //   console.log('hello');
  // };

  const handelSignOut = async (e) => {
    e.preventDefault();
    await axios
      .get("/logout")
      .then((res) => {
        setIsToken(localStorage.removeItem("token"));
        // localStorage.removeItem('token');
        history.push("/login");
      })
      .catch((error) => console.error(error));

    const logedOut = localStorage.getItem("token");
    if (logedOut === null) setIsLogin(false);
  };

  useEffect(() => {
    setIsToken(localStorage.getItem("token"));
  }, [isToken]);

  return (
    <BlogContext.Provider
      value={{
        posts,
        handelDetail,
        post,
        handelChange,
        state,
        setState,
        handelSignOut,
        isLogin,
        setIsLogin,
        fetchPosts,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
