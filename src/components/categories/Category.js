import React, { useState, useEffect } from "react"
import { CategoryList } from "./CategoryList"
import { CategoryForm } from "./CategoryForm"

export const Category = () => {
    return ( <>
    
    <h1>Categories</h1>
        <article>
            < CategoryList />
        </article>
        <article>
            < CategoryForm />
        </article>
         </>
         )

}