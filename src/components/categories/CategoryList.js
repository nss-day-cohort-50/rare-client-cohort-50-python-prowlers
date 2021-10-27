import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCategories } from "./CategoryManager"

export const CategoryList = () => {
    const [ categories, setCategory ] = useState([])
    const history = useHistory()

    useEffect(
        () => {
        getCategories()
        .then(data => setCategory(data))
    }, [])

    return (
        <>
        <h2>Categories</h2>
        <div style={{margin: "0rem 3rem"}}>
            <article className="post__title__categories">
                {
                    categories.map(category => {
                        return <h1>
                            <button>edit</button> <button>delete</button> {category.label}
                            </h1>
                    })
                }
            </article>
        </div>
        </>
            
    )
}