import React from "react"
import { Route } from "react-router-dom"
import { Category } from "./categories/Category"
import { CommentList } from "./comment/CommentList"
import { CurrentUserPosts } from "./posts/CurrentUserPosts";
import { Tags } from "./tags/Tags"

export const ApplicationViews = () => {
    return (
        <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/comments">
                <CommentList />
            </Route>
            <Route exact path="/categories">
                <Category />
            </Route>
            <Route exact path="/myposts">
                <CurrentUserPosts />
            </Route>
            <Route exact path="/tags">
                <Tags />
            </Route>
        </main>

        </>
    )
}
