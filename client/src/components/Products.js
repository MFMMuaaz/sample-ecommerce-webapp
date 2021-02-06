import React from 'react'
import axios from 'axios'
import Product from './Product'
import '../App.css'
import { server, port } from '../configurations/config'

function Products({ currentProduct, currentProducts, changeCurrentProduct, currentCategory }) {
    const [id, setId] = React.useState(1)
    const [images, setImages] = React.useState("")

    const incrementId = () => {
        setId(id === currentProducts.length ? 1 : id + 1)
    }
    // console.log(image)
    console.log(id)
    console.log(currentCategory)

    //Getting one image related to the current product
    React.useEffect(() => {
        setId(1)
        axios.get(`${server}:${port}/images/product/${currentCategory.id}?category_id=true`)
            .then(response => {
                console.log(response.data);
                setImages(response.data)
            })
    }, [currentCategory])

    const constructImagePath = ({ image_location, image_name, extension }) => {
        console.log(image_location + "/" + image_name + "." + extension)
        return (image_location + "/" + image_name + "." + extension)
    }

    return (
        <div className="products-pane">
            {currentProducts.slice(id - 1, id).map(product => {
                return (
                    <dev key={product.product_id} onClick={() => { changeCurrentProduct(product) }}>
                        <Product product={product} image={constructImagePath(images[id - 1])} />
                    </dev>
                );
            })
            }

            <button onClick={() => { incrementId() }}>Next Item</button>
        </ div>
    )
}

export default Products
