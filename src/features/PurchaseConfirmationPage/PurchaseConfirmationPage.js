import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useOrderService from "../OrderDetailPage/useOrderDetail";


const PurchaseConfirmationPage = () => {
    const {onPostService} = useOrderService()
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state
    const price = data.price
    console.log("Data purchase: ", data);
    const handleSubmit = () => {
        onPostService(data.buyerId, data.serviceDetailId, data.dueDate, data.occasion, data.recipient, data.message, data.description)
        //navigate('/')
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
                            <h4 className="card-title ms-3">{data.occasion} Greeting</h4>
                        </div>
                        <div className="my-2" style={{border: "1px solid #FFFFFF"}}></div>
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">{data.occasion} greeting</p>
                            <p className="card-text">Rp. {price}</p>
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
                            <p className="card-text">Rp. {price}</p> */}
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">TOTAL</p>
                            <p className="card-text">Rp. {price}</p>
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
        </div>
    </div>


        // <div className="col-md-12 purchase-confirmation-container">
        //     <div className="col-md-1"></div>
        //     <div className="col-md-5 payment-option">
                
        //         <div className="title-payment">
        //                 Payment Option
        //         </div>
        //         <div className="line"></div>
                
        //         <div className="ewallet-bank">
        //         <div style={{display:'flex', justifyContent:'flex-start'}}>
        //             <img className="img-ewallet" src="" alt="" />
        //             <img className="img-ewallet" src="" alt="" />
        //             <img className="img-ewallet" src="" alt="" />
        //             <img className="img-ewallet" src="" alt="" />
        //         </div>
        //         <div className="no-ewallet">
        //             <h3>+628712345678</h3>
        //         </div>
        //         <div style={{display:'flex', justifyContent:'flex-start'}}>
        //             <img className="img-bank" src="" alt=""></img>
        //             <img  className="img-bank" src="" alt="" />
        //         </div>
        //         <div className="no-bank">
        //             <h3>123456789</h3>
        //         </div>
        //         </div>

        //     </div>

        //     <div className="col-md-1"></div>

        //     <div className="col-md-3 invoice">
        //         <div className="service">
        //                 <img className="img-service" src="" alt="">
        //                 </img>
        //                 <div className="title-service">
        //                     {data.occasion} greeting
        //                 </div>
        //         </div>

        //         <div className="line"></div>

        //         <div className="title-invoice">
        //                 <div className="what-service">
        //                         {data.occasion} greeting
        //                 </div>
        //                 <div className="price-service">
        //                         Rp. {price}
        //                 </div>
        //         </div>

        //         <div className="detail-invoice">
        //             <table className="font-detail-invoice">
        //                 <thead></thead>
        //                 <tbody>
        //                 </tbody>
        //             </table>
        //         </div>

        //         <div className="title-invoice">
        //             <div className="total">TOTAL</div>
        //             <div className="price-service">Rp. {price}</div>
        //         </div>

        //         <div className="title-invoice">
        //             <div className="what-service">total delivery days</div>
        //             <div className="price-service">5 days</div>
        //         </div>


        //         <div className="box-button-confirm">
        //             <button onClick={handleSubmit} className="confirm">Confirm & Pay</button>
        //         </div>


        //     </div>
        //     <div className="col-md-1"></div>
        
        // </div>
  )
}

export default PurchaseConfirmationPage;
