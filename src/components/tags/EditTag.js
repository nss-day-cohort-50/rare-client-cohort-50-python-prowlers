import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { TagsContext } from "./TagProvider"
import "./Tags.css"



export const EditTag = () => {
    const [tag, setTag] = useState({
        label: ""
    })
    const { editTag } = useContext(TagsContext)
    const { tagId } = useParams()

    useEffect( () => {
        return fetch(`http://localhost:8088/tags/${tagId}`)
            .then(res => res.json())
            .then((data) => {setTag(data)})
    },[]
    )


    return (
        <>
                <div className="editTag_form">
                <h2>Edit Tag</h2>
                    <form className="editTag">
                        <fieldset>
                            <div className="form-group">
                                <input
                                    onChange = {
                                        (evt) => {
                                            const copy = {...tag}
                                            copy.label = evt.target.value
                                            setTag(copy)
                                        }
                                    }
                                    required autoFocus
                                    type="textarea"
                                    className="form-control"
                                    defaultValue={tag.label}
                                />
                            </div>
                        </fieldset>
                        <button className="updateTag" onClick={() => { editTag(tagId, tag.label) }}>
                            Update
                        </button>
                    </form>
                </div>
        </>
    )
}