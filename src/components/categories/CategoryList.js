import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCategories, deleteCategory } from "./CategoryManager"

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
        <div style={{margin: "0rem 3rem"}}>
            <article className="post__title__categories">
                {
                    categories.map(category => {
                        return <h2>
                            <button>edit</button> 
                            <button onClick={() => deleteCategory(category.id).then(() => history.push("/categories"))}> Delete </button>
                            {category.label}
                            </h2>
                    })
                }
            </article>
        </div>
        </>
            
    )
}