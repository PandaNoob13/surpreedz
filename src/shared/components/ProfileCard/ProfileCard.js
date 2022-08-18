import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';

const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    username: "gisella_anastasia",
    email: "gisella_anastasia@gmail.com",
    category: "Aktris",
    location: "Indonesia",
    currency: "IDR",
    price: 1600000,
    rating: 4.9,
    createdAt: "01-01-2022"
}

const ProfileCard = () => {
    const {picUrl, name, username, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3 col-4" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <img src={picUrl} className="img rounded-circle mx-auto d-block" style={{padding: "4px",width: "150px", height: "150px", objectFit: "cover"}} alt="artist"/>
            <div className="card-body text-white">
                <h5 className="card-title text-center mb-0">{name}</h5>
                <p className="card-text text-center"><small className="text-muted">{username}</small></p>
                <a href={email} className="btn btn-success mx-auto d-block">Email me</a>
                <div className="mt-3">
                    <p className="card-text mb-0"><small>From</small></p>
                    <p className="card-text">{location}</p>
                    <p className="card-text mb-0"><small>Language</small></p>
                    <p className="card-text">Indonesian, English</p>
                    <p className="card-text mb-0"><small>Member since</small></p>
                    <p className="card-text">{createdAt}</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;
