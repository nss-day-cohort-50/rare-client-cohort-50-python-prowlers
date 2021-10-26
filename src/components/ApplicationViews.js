import React from "react";
import { Route } from "react-router-dom";
import { CurrentUserPosts } from "./posts/CurrentUserPosts";
import { CommentList } from "./comment/CommentList";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path="/myposts">
          <CurrentUserPosts />
        </Route>
        <Route exact path="/comments">
          <CommentList />
        </Route>
      </main>
    </>
  );
};
