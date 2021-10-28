import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./posts.css";

export const PostDetail = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const currentUser = parseInt(localStorage.getItem("rare_user_id"));

  useEffect(() => {
    fetchPostById(postId).then((data) => setPost(data));
  }, []);

  const fetchPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`).then((res) => res.json());
  };

  return (
    <>
      <div>{post.title}</div>
    </>
  );
};
