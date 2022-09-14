import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./ServiceCard.css"

const serviceCardData = {
    picUrl: "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg",
    name: "Gisella Anastasia",
    category: "Aktris",
    currency: "IDR",
    price: 1600000,
    rating: 4.9
}

const ServiceCard = (props) => {
    const accountDetail = props.data.AccountDetail
    const {name, location} = accountDetail
    const photoProfile = accountDetail.PhotoProfiles[accountDetail.PhotoProfiles.length - 1]
    const {photo_link} = photoProfile
    const serviceDetail = props.data.ServiceDetail
    const {id, role} = serviceDetail
    const servicePrice = serviceDetail.ServicePrices[serviceDetail.ServicePrices.length - 1]
    const {price} = servicePrice
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    formatter.format(2500); /* $2,500.00 */
    // console.log("Data service card : ", props.data);
    // console.log("Photo Link : ", photo_link);
    return (
        <NavLink key={"/order-detail-page"} to='/order-detail-page' state={{
            picUrl: photo_link,
            name: name,
            email: props.data.email,
            location: location,
            joinDate: props.data.join_date,
            serviceDetailId: id,
            price: price,
            dataUrl: props.pic
        }}>
            <div className="card mx-2 service-card" style={{minWidth: '12rem', minHeight: "16rem", borderRadius: "12px", backgroundColor:"#373535"}}>
                <img src={`data:image/jpg;base64,${props.pic}`} className="card-img-top" style={{maxWidth: "12.5rem", padding: "4px", height: '15rem', objectFit: "cover", borderRadius: "12px"}} alt="artist"/>
                <div className="card-body text-white" style={{padding: "8px"}}>
                    <p className="card-title h6" style={{marginBottom: "2px"}}>{name}</p>
                    <p className="card-text" style={{fontSize: "0.75rem"}}>{role}</p>
                    <div className='d-flex flex-row justify-content-between'>
                        <p className="card-text" style={{fontSize: "0.9rem", marginBottom: "0px"}}>{formatter.format(price)}</p>
                        <p className="card-text" style={{fontSize: "0.9rem", marginBottom: "0px"}}>
                            {/* <FontAwesomeIcon icon={solid("star")} style={{color: "gold"}} /> */}
                            {/* {rating} */}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>

    )
};

export default ServiceCard;
