CREATE TABLE IF NOT EXISTS Product(
	id INT AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Category(
	id INT AUTO_INCREMENT,
    category_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
    
CREATE TABLE IF NOT EXISTS Product_Category(
	product_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE IF NOT EXISTS Image(
	id INT AUTO_INCREMENT,
    image_name VARCHAR(50) NOT NULL,
    extension VARCHAR(10) NOT NULL,
    image_location VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Product_Image(
	product_id INT NOT NULL,
    image_id INT NOT NULL,
    PRIMARY KEY (product_id, image_id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (image_id) REFERENCES Image(id)
);

CREATE TABLE Category_Image(
	category_id INT NOT NULL,
    image_id INT NOT NULL,
    PRIMARY KEY (category_id, image_id),
    FOREIGN KEY (category_id) REFERENCES Category(id),
    FOREIGN KEY (image_id) REFERENCES Image(id)
);
