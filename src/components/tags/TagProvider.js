

export const getAllTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(response => response.json())
}

export const getTag = (id) => {
    return fetch(`http://localhost:8088/tags/${id}`)
        .then(response => response.json())
}
