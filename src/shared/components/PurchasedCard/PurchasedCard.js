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

const purchasedCardData = {
    reqType: "Birthday wishes",
    messageFor: "Sammy",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    due: "16-08-2022",
    status: "REJECTED"
}

const PurchasedCard = () => {
    const {picUrl, name, category, currency, price, rating} = serviceCardData;
    const {reqType, messageFor, description, due, status} = purchasedCardData;

    return (
        <div className="card mb-3" style={{maxWidth: "100%", borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={picUrl} className="img" style={{width: "100%", padding: "4px", height: '200px', objectFit: "cover", borderRadius: "12px"}} alt="artist"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white">
                        <h5 className="card-title">{reqType} from {name}</h5>
                        <p className="card-text mb-0"><small>Message for:</small></p>
                        <p className="card-text">{messageFor}</p>
                        <p className="card-text mb-0"><small>Description:</small></p>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body text-white">
                        <h5 className="card-title">{currency} {price}</h5>
                        <p className="card-text">Due {due}</p>
                        <h4 className="card-text">{status}</h4>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PurchasedCard;
