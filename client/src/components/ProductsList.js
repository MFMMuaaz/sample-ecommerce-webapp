import React from 'react'
import '../App.css'
import axios from 'axios'
import { server, port } from '../configurations/config'

function ProductsList({ currentCategoryId, currentCategoryName, products, changeCurrentProducts }) {

    React.useEffect(() => {
        axios.get(`${server}:${port}/ ${currentCategoryId} /products`)
            .then(response => {
                console.log(response.data.message);
                changeCurrentProducts(response.data.message)
            })
    }, [currentCategoryId])

    return (
        <div className="products-list-pane">
            <h1 id="title">{currentCategoryName}</h1>
            <ul className="product-list">
                {
                    products.map(product => {
                        return (
                            <li className="row" key={product.product_id}>
                                <dev>{product.product_name}</dev>
                            </li>
                        );
                    })
                }
            </ul>
        </div >
    );
}

export default ProductsList




