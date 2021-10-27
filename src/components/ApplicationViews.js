import React from "react";
import { Route } from "react-router-dom";
import { CategoryList } from "./categories/CategoryList";
import { CommentList } from "./comment/CommentList";
import { CurrentUserPosts } from "./posts/CurrentUserPosts";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path="/comments">
          <CommentList />
        </Route>
        <Route exact path="/myposts">
          <CurrentUserPosts />
        </Route>
        <Route exact path="/categories">
          <CategoryList />
        </Route>
      </main>
    </>
  );
};
