import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CategoryContext = createContext()

// This component establishes what data can be used.
export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch(`http://localhost:8088/categories`)
        .then(res => res.json())
        .then(setCategories)
    }

    const createCategories = (label) => {

        const categoryData = {
            label: label
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryData)
        }

        return fetch(`http://localhost:8088`, fetchOption)
    }

    const deleteCategory = (id) => {

        return fetch(`http://localhost:8088/categories/${id}`, {
            method: "DELETE"
        })
        .then(getCategories)

    }

    return (
        <CategoryContext.Provider value={{
            categories, setCategories, getCategories, createCategories, deleteCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}
