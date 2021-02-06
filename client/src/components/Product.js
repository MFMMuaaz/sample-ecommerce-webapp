import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product, image }) {

    return (
        <div className="product">
            <dev id="title">{product.product_name}</dev>
            <dev className="product-container">
                <dev className="image-container">
                    <Link to={'/product/' + product.product_id + "/" + product.product_name + "/" + product.price + "/" + product.size + "/" + product.rating}>
                        <img src={image} />
                    </Link>
                </dev>
                <dev className="product-detail-container">
                    <dev>
                        <dev className="tag">Price:</dev>
                        <dev className="value">{product.price}</dev>
                    </dev>
                    <dev>
                        <dev className="tag">Size:</dev>
                        <dev className="value">{product.size}</dev>
                    </dev>
                    <dev>
                        <dev className="tag">Rating:</dev>
                        <dev className="value">{product.rating}</dev>
                    </dev>
                </dev>
            </dev>

        </div>
    )
}

export default Product
