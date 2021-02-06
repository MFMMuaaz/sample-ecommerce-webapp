import React from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider';

function Product() {
    var { id, title, price, size, rating } = useParams();

    return (
        <div className="product-page">
            <ImageSlider productId={id} />
            <dev className="product-details">
                <h1>{title}</h1>
                <ul className="items">
                    <li>Price: {price}</li>
                    <li>Size: {size}</li>
                    <li>Rating: {rating}</li>
                </ul>
            </dev>
        </div>
    )
}

export default Product
