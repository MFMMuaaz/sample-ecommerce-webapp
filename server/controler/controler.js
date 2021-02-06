const express = require('express')
const app = express()
app.use(express.json())
const mysql = require('mysql')
const { databaseConfig } = require('../configurations/config.js')

var mysqlConnection = mysql.createConnection(databaseConfig);

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return
    };
    console.log("Connected!");
});

const home = (req, res) => {
    res.status(200).json({ message: "Welcome" })
}

const getCategoryList = (req, res) => {
    // get all categories
    const statement = "SELECT * FROM category"

    mysqlConnection.query(statement, (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            // console.log(rows)
            res.status(200).json({ message: rows })
        }
    })
}

const getProductsList = (req, res) => {
    // get all products related to a category
    const statement = "SELECT * FROM (product LEFT JOIN \
                        product_category ON product.id = product_category.product_id) LEFT JOIN \
                        category ON product_category.category_id = category.id \
                        WHERE category_id=?"

    mysqlConnection.query(statement, [req.params.categoryId], (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            // console.log(rows)
            res.status(200).json({ message: rows })
        }
    })
}

const getCategoryImages = (req, res) => {
    // get all images related to a category
    const statement = "SELECT * FROM image LEFT JOIN \
                        category_image ON image.id = category_image.image_id \
                        WHERE category_id=?"

    mysqlConnection.query(statement, [req.params.categoryId], (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            res.status(200).json(rows)
        }
    })
}

const getProductImages = (req, res) => {

    let statement = ""
    if (req.query.category_id === "true") {
        console.log(req.query);
        console.log(req.params);
        //Get only one image of each product of a particular category
        statement = "select \
                        product_image.product_id, \
                        ANY_VALUE(product_image.image_id) as image_id, \
                        ANY_VALUE(image.image_name) as image_name, \
                        ANY_VALUE(image.extension) as extension, \
                        ANY_VALUE(image.image_location) as image_location, \
                        product_category.category_id \
                        from (product_image left join image on product_image.image_id=image.id) left join \
                        product_category on product_image.product_id = product_category.product_id \
                        where category_id=? \
                        group by product_image.product_id"
    } else {
        // get all images related to a product
        statement = "SELECT product_id, image_id, image_location, image_name, extension FROM image LEFT JOIN \
                        product_image ON image.id = product_image.image_id \
                        WHERE product_id=?"
    }

    mysqlConnection.query(statement, [req.params.productId], (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            // console.log(rows)
            res.status(200).json(rows)
        }
    })
}

module.exports = {
    home,
    getCategoryList,
    getProductsList,
    getCategoryImages,
    getProductImages
}