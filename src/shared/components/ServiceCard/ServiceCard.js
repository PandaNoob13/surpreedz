import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';

const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    category: "Aktris",
    currency: "IDR",
    price: 1600000,
    rating: 4.9
  }

const ServiceCard = () => {
    const {picUrl, name, category, currency, price, rating} = serviceCardData;

    return (
        <div className="card" style={{width: '10rem', height: "300px", borderRadius: "12px", backgroundColor:"#373535"}}>
            <img src={picUrl} className="card-img-top" style={{width: '100%', padding: "4px", height: '200px', objectFit: "cover", borderRadius: "12px"}} alt="artist"/>
            <div className="card-body text-white" style={{padding: "8px"}}>
                <p className="card-title h6" style={{marginBottom: "2px"}}>{name}</p>
                <p className="card-text" style={{fontSize: "0.75rem"}}>{category}</p>
                <div className='d-flex flex-row justify-content-between'>
                    <p className="card-text" style={{fontSize: "0.9rem", marginBottom: "0px"}}>{currency} {price}</p>
                    <p className="card-text" style={{fontSize: "0.9rem", marginBottom: "0px"}}>
                        <FontAwesomeIcon icon={solid("star")} style={{color: "gold"}} />
                        {rating}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ServiceCard;