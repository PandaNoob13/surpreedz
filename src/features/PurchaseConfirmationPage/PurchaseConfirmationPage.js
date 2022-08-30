import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useOrderService from "../OrderDetailPage/useOrderDetail";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import Loading from "../../shared/components/Loading/Loading";


const PurchaseConfirmationPage = () => {
    const {onPostService, isLoading} = useOrderService()
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state

    const data2 = {
        buyerId: parseInt(window.localStorage.getItem('account_id')),
        serviceDetailId: parseInt(window.localStorage.getItem('order_detail_serviceDetailId')),
        dueDate: window.localStorage.getItem('order_detail_dueDate'),
        occasion: window.localStorage.getItem('order_detail_occasion'),
        message: window.localStorage.getItem('order_detail_message'),
        description: window.localStorage.getItem('order_detail_description'),
        price: parseInt(window.localStorage.getItem('order_detail_price')),
        recipient: window.localStorage.getItem('order_detail_recipient')
    }
    
   
    const handleSubmit = () => {
        console.log('data => ', data);
        console.log('data2 => ', data2);
        if (data) {
            onPostService(data.buyerId, data.serviceDetailId, data.dueDate, data.occasion, data.recipient, data.message, data.description)
            
        }else {
            onPostService(data2.buyerId, data2.serviceDetailId, data2.dueDate, data2.occasion, data2.recipient, data2.message, data2.description)
        }

        swal({
            title:'Transaction Success',
            icon:'success'
        })
    }

    return (
        <div className='text-white min-vh-100' style={{marginTop: '56px', backgroundColor:'#212121'}}>
        <div className="container py-5">
            <div className='row'>
                <div className='payment-option col-md-5 '>
                    <div className="card mb-3 p-4" style={{borderRadius: '12px', backgroundColor:'#373535'}}>
                        <h4 className="card-title">Payment Option</h4>
                        <div className="my-2" style={{border: "1px solid #FFFFFF"}}></div>
                        <div className="d-flex flex-row justify-content-around mt-5 mb-3">
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                        </div>
                        <div className="card bg-dark mt-3 mb-3">
                            <p className="card-text p-2">+628XXXXXXXXXX</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around mt-5 mb-3">
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                        </div>
                        <div className="card bg-dark mt-3 mb-3">
                            <p className="card-text p-2">XXXXXXXXXXXXXX</p>
                        </div>
                    </div>                    
                </div>
                <div className='bill-confirm col-md-7'>
                    <div className="card mb-3 p-4" style={{borderRadius: '12px', backgroundColor:'#373535'}}>
                        <div className="d-flex flex-row align-items-center">
                            <img className="img-thumbnail" src="" alt=""></img>
                            {data ?
                            <h4 className="card-title ms-3">{data.occasion} Greeting</h4>
                            :
                            <h4 className="card-title ms-3">{data2.occasion} Greeting</h4>
                            }
                            

                        </div>
                        <div className="my-2" style={{border: "1px solid #FFFFFF"}}></div>
                        {data ?
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">{data.occasion} greeting</p>
                            <p className="card-text">Rp. {data.price} </p>
                        </div> 
                        :
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">{data2.occasion} greeting</p>
                            <p className="card-text">Rp. {data2.price}</p>
                        </div>
                        }
                        
                        <div className="card detail-order mb-3">
                            <div className="container text-black py-2">
                                <div className='d-flex flex-auto align-items-center'>
                                    {/* <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>1 revision</p> */}
                                </div>
                                <div className='d-flex flex-auto align-items-center'>
                                    {/* <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>a minute length</p> */}
                                </div>
                                <div className='d-flex flex-auto align-items-center'>
                                    {/* <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>high quality video file</p> */}
                                </div>
                                {/* <table className="font-detail-invoice">
                                    <thead></thead>
                                    <tbody>
                                    </tbody>
                                </table> */}
                                <br/>
                                <br/>
                                <br/>

                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            {/* <p className="card-text">Service fee</p>
                            <p className="card-text">Rp. {data.price}</p> */}
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">TOTAL</p>
                            {data ? <p className="card-text">Rp.{data.price}</p> : <p className="card-text">Rp.{data2.price}</p>}
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">total delivery days</p>
                            <p className="card-text">5 days</p>
                        </div>


                        <div className="d-flex flex-row justify-content-around mb-4 mt-4">
                            <NavLink to='/' onClick={handleSubmit} className="col-10 btn btn-light" >Confirm & Pay</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ? <Loading/> : <></>}
        </div>
    </div>

  )
}

export default PurchaseConfirmationPage;
