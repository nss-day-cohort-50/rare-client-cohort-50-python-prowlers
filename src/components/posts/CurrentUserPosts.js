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
          return <div className="post_container"></div>;
        })}
      </div>
    </>
  );
};
