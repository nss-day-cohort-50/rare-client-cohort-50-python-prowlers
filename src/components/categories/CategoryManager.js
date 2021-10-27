export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(response => response.json())
}

export const getCategoryId = (id) => {
    return fetch(`http://localhost:8088/categories/${id}`)
        .then(response => response.json())
}

export const addCategories = category => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then(getCategories)
}

export const deleteCategory = (categoryId) => {
    return fetch(`http://localhost:8088/categories/${categoryId}`, {
        method: "DELETE"
    })
    .then(getCategories)
}