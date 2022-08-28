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

const PurchasedCard = (props) => {
    // const {picUrl, name, category, currency, price, rating} = serviceCardData;
    // const {reqType, messageFor, description, due, status} = purchasedCardData;

    const name = "gisella";
    const photo_link = "https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg";

    // const accountDetail = props.data.AccountDetail
    // const { name } = accountDetail

    // const photoProfile = accountDetail.PhotoProfiles[accountDetail.PhotoProfiles.length - 1] // last data index (length-1)
    // const {photo_link} = photoProfile
    
    const orderRequest = props.data.OrderRequest
    const { occasion, recipient_name, message } = orderRequest
    const orderStatus = orderRequest.OrderStatus[orderRequest.OrderStatus.length - 1]
    const { status } = orderStatus

    const serviceDetail = props.data.ServiceDetail
    const servicePrice = serviceDetail.ServicePrices[serviceDetail.ServicePrices.length - 1] // last data index (length-1)
    const {price} = servicePrice

    const order = props.data.Order;
    const { due_date, order_id } = order;
    const videoResult = order.VideoResult[order.VideoResult.length - 1];
    const video_link = videoResult;

    return (
        <div className="card mb-3" style={{maxWidth: "100%", borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={photo_link} className="img" style={{width: "100%", padding: "4px", height: '200px', objectFit: "cover", borderRadius: "12px"}} alt="artist"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white">
                        <h5 className="card-title">{occasion} from {name}</h5>
                        <p className="card-text mb-0"><small>Message for:</small></p>
                        <p className="card-text">{recipient_name}</p>
                        <p className="card-text mb-0"><small>Description:</small></p>
                        <p className="card-text">{message}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body text-white">
                        <h5 className="card-title">Rp. {price}</h5>
                        <p className="card-text">Due {due_date}</p>
                        <h4 className="card-text">{status}</h4>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PurchasedCard;
