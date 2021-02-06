import React from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import axios from 'axios'
import { server, port } from '../configurations/config'

function ImageSlider({ productId }) {
    const [currentProductImages, setCurrentProductImages] = React.useState([])
    const [currentImg, setCurrentImg] = React.useState(0)

    const length = currentProductImages.length

    const changeCurrentProductImages = (images) => {
        setCurrentProductImages(images)
    }
    console.log(currentImg)
    const prevSlide = () => {
        setCurrentImg(() => {
            return (
                currentImg === 0 ? length - 1 : currentImg - 1)
        })
    }

    const nextSlide = () => {
        setCurrentImg((currentImg + 1) % length)
    }

    //Getting all images related to the current product
    React.useEffect(() => {
        axios.get(`${server}:${port}/images/product/${productId}`)
            .then(response => {
                console.log(response.data);
                changeCurrentProductImages(response.data)
            })
    }, [])

    const constructImagePath = ({ image_location, image_name, extension }) => {
        console.log(image_location + "/" + image_name + "." + extension)
        return (image_location + "/" + image_name + "." + extension)
    }

    return (
        <section className="slider">
            <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />

            {currentProductImages.map((image, index) => {
                return (
                    <dev className={index === currentImg ? "slide active" : "slide"} key={index}>

                        {index === currentImg && <img src={constructImagePath(image)} className="image" />}
                    </dev>
                );
            })}
            <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
        </section>
    )
}

export default ImageSlider
