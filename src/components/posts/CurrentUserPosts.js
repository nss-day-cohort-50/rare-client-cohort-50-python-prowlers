import React, { useState, useEffect } from "react";

export const CurrentUserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const currentUser = parseInt(localStorage.getItem("rare_user_id"));

  useEffect(() => {
    fetchCurrentUSerPosts().then((data) => setUserPosts(data));
  }, []);

  const fetchCurrentUSerPosts = () => {
    return fetch(`http://localhost:8088/posts?user_id=${currentUser}`).then(
      (response) => response.json()
    );
  };
  return (
    <>
      <div className="post_feed">
        {userPosts?.map((post) => {
          return (
            <div className="post_container">
              <div className="top">
                <div className="post_title">{post?.title}</div>
                <div className="post_date">{post?.publication_date}</div>
              </div>
              <div className="center">
                <div className="post_image">{post?.image_url}</div>
              </div>
              <div className="bottom">
                <div className="post_author"></div>
                <div className="post_reaction"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
