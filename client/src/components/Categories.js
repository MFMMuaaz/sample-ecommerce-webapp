import React from 'react'
import Axios from 'axios'
import '../App.css'
import { server, port } from '../configurations/config'

function Categories({ categories, changeCurrentCategory, changeCurrentCategories }) {

    React.useEffect(() => {
        Axios.get(`${server}:${port}/category`)
            .then(response => {
                console.log(response.data.message);
                changeCurrentCategories(response.data.message)
            })
    }, [])

    return (
        <div className="categories-pane">
            <h1>Categories</h1>
            <ul className="category-list">
                {
                    categories.map(category => {
                        return (
                            <li
                                className="row"
                                key={category.id} onClick={() => { changeCurrentCategory(category) }}>
                                <dev id="title">{category.category_name}</dev>
                            </li>
                        );
                    })
                }
            </ul>
        </div >
    );
}

export default Categories
