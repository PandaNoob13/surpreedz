import React from 'react';
import moment from "moment";

const StatusCondition = (status, callback, orderId) => {
    switch (status) {
        case "On progress":
            return (
                <h4 className="card-text">ON PROGRESS</h4>
            )
        case "Rejected":
            return (
                <h4 className="card-text">REJECTED</h4>
            )
        // case "Cancelled":
        //     return (
        //         <h4 className="card-text">CANCELLED</h4>
        //     )
        // case "Exceed":
        //     return (
        //         <h4 className="card-text">EXCEED DUE DATE</h4>
        //     )
        case "Submitted":
            return (
                <div className='col-md-12 d-flex flex-wrap justify-content-between gap-2 align-items-center mb-1'>
                    <h4 className="card-text">DONE</h4>
                    <div className='me-1'>
                        <button onClick={(e) => {
                        e.preventDefault();
                        callback(orderId);
                    }} className="btn btn-light m-2">Get Video</button>
                    </div>
                </div>
            )
        default:
            return (
                <h4 className="card-text">Waiting for confirmation</h4>
            );
            
    }
 }

const PurchasedCard = (props) => {
    const {occasion, name, price, dueDate, status, orderId, orderRequest, photoUrl} = props.data

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return (
        <div className="card mb-3" style={{maxWidth: "100%", borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={`data:image/jpg;base64,${photoUrl}`} className="img" style={{width: "100%", padding: "4px", height: '200px', objectFit: "cover", borderRadius: "12px"}} alt="artist"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white">
                        <h5 className="card-title">{occasion} message from {name}</h5>
                        <p className="card-text mb-0"><small>Message for:</small></p>
                        <p className="card-text">{orderRequest.recipient_name}</p>
                        <p className="card-text mb-0"><small>Description:</small></p>
                        <p className="card-text">{orderRequest.message}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body text-white">
                        <h5 className="card-title">{formatter.format(price)}</h5>
                        <p className="card-text mb-0"><small>Due date:</small></p>
                        <p className='card-text mb-2'>{moment({dueDate}).format("MMMM Do YYYY")}</p>
                        {StatusCondition(status, props.callback, orderId)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PurchasedCard;
