import React from 'react';

const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    email: "gisella_anastasia@gmail.com",
    //category: "Aktris",
    location: "Indonesia",
    currency: "IDR",
    price: 1600000,
    rating: 4.9,
    createdAt: "01-01-2022"
}

const IsSeller = (category) => {
    if (category != undefined){
        return (
            <>
                <p className="card-text mb-0"><small>Category</small></p>
                <p className="card-text">{category}</p>
            </>

        )
    }
}

const ProfileCard = () => {
    const {picUrl, name, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <img src={picUrl} className="img rounded-circle mx-auto d-block" style={{padding: "4px",width: "150px", height: "150px", objectFit: "cover"}} alt="artist"/>
            <div className="card-body text-white">
                <h3 className="card-title text-center mb-0">{name}</h3>
                {/* <p className="card-text text-center"><small className="text-muted">{username}</small></p> */}
                {/* <a href={email} className="btn btn-success mx-auto d-block">Email me</a> */}
                <div className="mt-3">
                    {IsSeller(category)}
                    <p className="card-text mb-0"><small>From</small></p>
                    <p className="card-text">{location}</p>
                    {/* <p className="card-text mb-0"><small>Language</small></p>
                    <p className="card-text">Indonesian, English</p> */}
                    <p className="card-text mb-0"><small>Member since</small></p>
                    <p className="card-text">{createdAt}</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;