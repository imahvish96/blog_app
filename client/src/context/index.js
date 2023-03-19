import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { fetchAllPostApi, getRefreshToken } from "../api";

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
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const activeSession = localStorage.getItem("active_session");

  const fetchPosts = async () => {
    try {
      const allPost = await fetchAllPostApi();
      setPosts(allPost);
    } catch (error) {
      localStorage.clear();
      history.push("/signin");
    }
  };

  const isSessionExpires = async () => {
    try {
      if (activeSession) {
        const isSession = await getRefreshToken();
        setIsLogin(true);
        setAccessToken(isSession.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeSession) {
      localStorage.setItem("active_session", uuidv4());
      setIsLogin(true);
    } else {
      history.push("/signin");
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(() => {
      isSessionExpires();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [isLogin, activeSession]);

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

  return (
    <BlogContext.Provider
      value={{
        posts,
        handelDetail,
        post,
        handelChange,
        state,
        setState,
        isLogin,
        setIsLogin,
        fetchPosts,
        setAccessToken,
        accessToken,
        setRefreshToken,
        refreshToken,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
