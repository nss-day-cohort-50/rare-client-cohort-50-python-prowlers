import React, { useEffect, useState } from "react"
import { getAllTags } from "./TagProvider"


export const TagList = () => {
    const [tags, updateTags] = useState([])

    useEffect(() => {
        getAllTags()
        .then((data) => updateTags(data))
    }, [])

    return (
        <>
            <ul className="tag_list">
            {
                tags?.map((tag) => {
                    return <li className="tag" key={tag?.id}>{tag?.label}</li>
                })
            }
            </ul>
        </>
    )
}