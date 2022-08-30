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

const ReviewCard = () => {
    const {picUrl, name, username, email, category, location, currency, price, rating, createdAt} = serviceCardData;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body text-white">
                <h4 className="card-title">Reviews</h4>
                <div id='reviews-container'>
                    <div className="mt-3 " id='review'>
                        <div className='d-flex flex-row align-items-center' id='review-header'>
                            <img src={picUrl} className="img rounded-circle" style={{padding: "4px",width: "3rem", height: "3rem", objectFit: "cover"}} alt="artist"/>
                            <div className='d-flex flex-column ms-2 mb-1'>
                                <p className="card-text mb-0"><small>Username</small></p>
                                <p className="card-text">{username}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column ms-5 mt-2' id='review-content'>
                            <div className='d-flex flex-row ms-2 align-items-center' id='rating'>
                                <div className='d-flex flex-row align-items-center' style={{color: "gold"}}>
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <p className='m-0 ms-1'>5</p>
                                </div>
                                <span className='mx-2 text-muted'>|</span>
                                <small className='text-muted'>Published 2 months ago</small>
                            </div>
                            <div className='ms-2'>
                                <p className="card-text">
                                    Great reading, great voice and great audio quality, this is definitely one of the best Indonesian VO gigs you can find here, very satisfied with this seller!
                                </p>
                            </div>
                        </div>                   
                    </div>
                    <div className="mt-3 " id='review'>
                        <div className='d-flex flex-row align-items-center' id='review-header'>
                            <img src={picUrl} className="img rounded-circle" style={{padding: "4px",width: "3rem", height: "3rem", objectFit: "cover"}} alt="artist"/>
                            <div className='d-flex flex-column ms-2 mb-1'>
                                <p className="card-text mb-0"><small>Username</small></p>
                                <p className="card-text">{username}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column ms-5 mt-2' id='review-content'>
                            <div className='d-flex flex-row ms-2 align-items-center' id='rating'>
                                <div className='d-flex flex-row align-items-center' style={{color: "gold"}}>
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <p className='m-0 ms-1'>5</p>
                                </div>
                                <span className='mx-2 text-muted'>|</span>
                                <small className='text-muted'>Published 2 months ago</small>
                            </div>
                            <div className='ms-2'>
                                <p className="card-text">
                                    Great reading, great voice and great audio quality, this is definitely one of the best Indonesian VO gigs you can find here, very satisfied with this seller!
                                </p>
                            </div>
                        </div>                   
                    </div>
                    <div className="mt-3 " id='review'>
                        <div className='d-flex flex-row align-items-center' id='review-header'>
                            <img src={picUrl} className="img rounded-circle" style={{padding: "4px",width: "3rem", height: "3rem", objectFit: "cover"}} alt="artist"/>
                            <div className='d-flex flex-column ms-2 mb-1'>
                                <p className="card-text mb-0"><small>Username</small></p>
                                <p className="card-text">{username}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column ms-5 mt-2' id='review-content'>
                            <div className='d-flex flex-row ms-2 align-items-center' id='rating'>
                                <div className='d-flex flex-row align-items-center' style={{color: "gold"}}>
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <FontAwesomeIcon icon={solid("star")} />
                                    <p className='m-0 ms-1'>5</p>
                                </div>
                                <span className='mx-2 text-muted'>|</span>
                                <small className='text-muted'>Published 2 months ago</small>
                            </div>
                            <div className='ms-2'>
                                <p className="card-text">
                                    Great reading, great voice and great audio quality, this is definitely one of the best Indonesian VO gigs you can find here, very satisfied with this seller!
                                </p>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ReviewCard;