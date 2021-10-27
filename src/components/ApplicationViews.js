import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { CommentList } from "./comment/CommentList"
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
                <CategoryList />
            </Route>
            <Route exact path="/tags">
                <Tags />
            </Route>
        </main>

        </>
    )
}
