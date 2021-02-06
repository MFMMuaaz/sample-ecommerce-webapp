import React from 'react'
import '../App.css'
import Categories from '../components/Categories'
import ProductsList from '../components/ProductsList'
import Products from '../components/Products'

function Home() {
    const [currentCategory, setCurrentCategory] = React.useState([])
    const [currentCategories, setCurrentCategories] = React.useState([])

    const [currentProduct, setCurrentProduct] = React.useState([])
    const [currentProducts, setCurrentProducts] = React.useState([])

    const changeCurrentCategory = (category) => {
        setCurrentCategory(category)
    }

    const changeCurrentProduct = (product) => {
        console.log(product)
        setCurrentProduct(product)
    }

    const changeCurrentProducts = (products) => {
        setCurrentProducts(products)
    }

    const changeCurrentCategories = (categories) => {
        setCurrentCategories(categories)
    }

    return (
        <div className="App">
            <Categories
                categories={currentCategories}
                changeCurrentCategory={changeCurrentCategory}
                changeCurrentCategories={changeCurrentCategories} />

            <Products
                currentProduct={currentProduct}
                currentProducts={currentProducts}
                changeCurrentProduct={changeCurrentProduct}
                currentCategory={currentCategory} />

            <ProductsList
                currentCategoryId={currentCategory.id}
                currentCategoryName={currentCategory.category_name}
                products={currentProducts}
                changeCurrentProducts={changeCurrentProducts} />
        </div>
    )
}

export default Home
