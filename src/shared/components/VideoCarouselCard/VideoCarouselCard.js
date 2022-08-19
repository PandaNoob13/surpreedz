import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./VideoCarouselCard.css"

const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    category: "Aktris",
    currency: "IDR",
    price: 1600000,
    rating: 4.9
  }

const VideoCarouselCard = () => {
    const {picUrl, name, category, currency, price, rating} = serviceCardData;

    return (
        <div className="card mx-2" style={{minWidth: '15rem', borderRadius: "12px", backgroundColor:"#373535"}}>
            <Carousel style={{minWidth: '15rem', padding: "1rem", borderRadius: "12px", overflow: "hidden"}} interval={null}>
                <Carousel.Item>
                    <img
                    className="carousel-img d-block w-100"
                    src="https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img d-block w-100"
                    src="https://vocasia.id/blog/wp-content/uploads/2021/09/pemimpin-otoriter-2.webp"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-img d-block w-100"
                    src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
};

export default VideoCarouselCard;