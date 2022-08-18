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

const AccountCard = () => {
    const {picUrl, name, username, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3 col-4" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body text-white">
                <h5 className="card-title">Account Information</h5>
                <div className="mt-3">
                    <p className="card-text mb-0"><small>Username</small></p>
                    <p className="card-text">{username}</p>
                    <p className="card-text mb-0"><small>Email</small></p>
                    <p className="card-text">{email}</p>
                </div>
                <p className="card-text text-center"><small className="text-muted">{username}</small></p>
            </div>
        </div>
    )
};

export default AccountCard;
