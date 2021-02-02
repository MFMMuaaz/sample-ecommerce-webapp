const express = require('express')
const mysql = require('mysql');

const app = express()
app.use(express.json())

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "online_store"
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return
    };
    console.log("Connected!");
});

app.get('/category', (req, res) => {
    // get all categories
    const statement = "SELECT * FROM category"

    mysqlConnection.query(statement, (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            res.status(200).json(rows)
        }
    })
})

app.get('/:categoryId/products', (req, res) => {
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
            res.status(200).json(rows)
        }
    })
})

app.get('/images/category/:categoryId', (req, res) => {
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
})

app.get('/images/product/:productId', (req, res) => {
    // get all images related to a product
    const statement = "SELECT * FROM image LEFT JOIN \
                        product_image ON image.id = product_image.image_id \
                        WHERE product_id=?"

    mysqlConnection.query(statement, [req.params.productId], (err, rows, feilds) => {
        if (err) {
            console.log(`DB ERROR: ${err}`)
            res.status(404).json({ message: err.message })
        } else {
            res.status(200).json(rows)
        }
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
