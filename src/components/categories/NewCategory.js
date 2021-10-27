import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Categories.css"




export const CategoryForm = () => {
    const [newCategory, updateNewCategory] = useState({
        label: ""
    })
    const history = useHistory()

    const saveNewCategory = (event) => {
        event.preventDefault()

        const categoryData = {
            label: newCategory.label
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryData)
        }

        return fetch(`http://localhost:8088/categories`, fetchOption)
            .then(() => {
                history.push("/categories")
            })
    }


    return (
        <>
                <div className="newCategory_form">
                <h2>Create a new category:</h2>
                    <form className="newCategory">
                        <fieldset>
                            <div className="form-group">
                                <input
                                    onChange = {
                                        (event) => {
                                            const copy = {...newCategory}
                                            copy.label = event.target.value
                                            updateNewCategory(copy)
                                        }
                                    }
                                    required autoFocus
                                    type="textarea"
                                    className="form-control"
                                    placeholder="Add text"
                                />
                            </div>
                        </fieldset>
                        <button className="newCategory" onClick={saveNewCategory}>
                            Create
                        </button>
                    </form>
                </div>
        </>
    )
}