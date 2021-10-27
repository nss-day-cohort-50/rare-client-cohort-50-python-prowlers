import React, { useState, useEffect } from "react"
import { CategoryList } from "./CategoryList"

export const Category = () => {
    return ( <>
         <h1>Categories</h1>
         <article>
             < CategoryList />
         </article>
         </>
         )

}