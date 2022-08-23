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

const EditProfile = () => {
    const {picUrl, name, username, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body">
                <h5 className="card-title text-white mb-3">Edit Profile</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputFullName" className="form-label text-white">Full name</label>
                        <input type="text" className="form-control" placeholder={name} id="inputFullName"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLocation" className="form-label text-white">Location</label>
                        <input type="text" className="form-control" placeholder={location} id="inputLocation"/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="inputLanguage" className="form-label text-white">Language</label>
                        <input type="text" className="form-control" placeholder="Indonesian, English" id="inputLanguage"/>
                    </div> */}
                    <button type="submit" className="btn btn-success">Save Changes</button>
                </form>
            </div>
        </div>        
    )
};

export default EditProfile;
