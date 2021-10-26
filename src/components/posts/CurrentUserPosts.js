import { React, useState, useEffect } from "react";

export const CurrentUserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const currentUser = localStorage.getItem("rare_user_id");

  useEffect(() => {
    return fetch(`http://127.0.0.1:8088/posts?_user_id=${currentUser}`)
      .then((response) => response.json())
      .then((data) => setUserPosts(data));
  }, []);

  return (
    <>
      <div className="post_container">
        {userPosts?.map((post) => {
          return (
            <div>
              {post?.title}
              {post?.image_url}
              {post?.content}
            </div>
          );
        })}
      </div>
    </>
  );
};
