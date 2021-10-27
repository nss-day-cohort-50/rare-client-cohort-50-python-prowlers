import React, { useContext, useEffect } from "react"
import { TagsContext } from "./TagProvider"


export const TagList = () => {
    const { tags, setTags, getTags, createTag, deleteTag } = useContext(TagsContext)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <>
            <ul className="tag_list">
            {
                tags?.map((tag) => 
                    <li className="tag" key={tag?.id}>{tag?.label}
                        <button onClick={() => { deleteTag(tag.id) }}>Delete</button>
                    </li>
                )
            }
            </ul>
        </>
    )
}