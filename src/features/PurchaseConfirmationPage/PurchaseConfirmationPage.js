import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useOrderService from "../OrderDetailPage/useOrderDetail";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import Loading from "../../shared/components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../OrderDetailPage/state/OrderDetailAction";
import useMidtransService from "./useMidtransService";
import Midtrans from "./Midtrans";


const PurchaseConfirmationPage = () => {
    const {onPostService, isLoading} = useOrderService()
    const navigate = useNavigate()
    const {onPostMidtrans, midPosts, statMidtrans} = useMidtransService()
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer)
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const buyerId = parseInt(window.localStorage.getItem('account_id'))
       
        console.log('order data dari purchase => ', addOrderDataResult);
        // dispatch(addOrder({buyerId : buyerId, serviceDetailId: addOrderDataResult.serviceDetailId,dueDate: addOrderDataResult.dueDate, occasion:addOrderDataResult.occasion, recipient: addOrderDataResult.recipient, message: addOrderDataResult.message, description: addOrderDataResult.description}))
        await onPostService(buyerId, addOrderDataResult.serviceDetailId, addOrderDataResult.dueDate, addOrderDataResult.occasion, addOrderDataResult.recipient, addOrderDataResult.message, addOrderDataResult.description)
        const token = await onPostMidtrans(addOrderDataResult.price)
        if (token !== '') {
            await Midtrans(token);
        }
        
    }

    useEffect(() => {
        // //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'; 
        //change this according to your client-key
        const myMidtransClientKey = 'SB-Mid-client-N7kVs82-uwgSIgaJ'; 
    
        let scriptTag = document.createElement('script');
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute('data-client-key', myMidtransClientKey); // data-client-key diganti dengan posts.token
    
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, [midPosts]);

    return (
        <div className='text-white min-vh-100' style={{marginTop: '56px', backgroundImage: "linear-gradient(black, #2C2C2C, #212121)"}}>
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
                            <h4 className="card-title ms-3">{addOrderDataResult.occasion} Greeting</h4>
                        </div>
                        <div className="my-2" style={{border: "1px solid #FFFFFF"}}></div>
            
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">{addOrderDataResult.occasion} greeting</p>
                            <p className="card-text">Rp. {addOrderDataResult.price} </p>
                        </div> 

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
                            <p className="card-text">Rp.{addOrderDataResult.price}</p>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">total delivery days</p>
                            <p className="card-text">3 days</p>
                        </div>


                        <div className="d-flex flex-row justify-content-around mb-4 mt-4">
                            <div onClick={handleSubmit} className="col-10 btn btn-light" >Confirm & Pay</div>
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
