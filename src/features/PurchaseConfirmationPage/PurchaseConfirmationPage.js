import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink } from "react-router-dom";


const PurchaseConfirmationPage = () => {
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
                            <h4 className="card-title ms-3">Graduation Greeting</h4>
                        </div>
                        <div className="my-2" style={{border: "1px solid #FFFFFF"}}></div>
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">Graduation greeting</p>
                            <p className="card-text">Rp575,000,00</p>
                        </div>
                        <div className="card detail-order mb-3">
                            <div className="container text-black py-2">
                                <div className='d-flex flex-auto align-items-center'>
                                    <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>1 revision</p>
                                </div>
                                <div className='d-flex flex-auto align-items-center'>
                                    <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>a minute length</p>
                                </div>
                                <div className='d-flex flex-auto align-items-center'>
                                    <FontAwesomeIcon icon={solid("circle-check")} style={{color: 'green'}}/>
                                    <p className='mb-0 ms-2'>high quality video file</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">Service fee</p>
                            <p className="card-text">Rp25.000,00</p>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">Total</p>
                            <p className="card-text">Rp600.000,00</p>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-text">Delivery in</p>
                            <p className="card-text">5 days</p>
                        </div>


                        <div className="d-flex flex-row justify-content-around mb-4 mt-4">
                            <NavLink to='/' className="col-10 btn btn-light" >Confirm & Pay</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PurchaseConfirmationPage;
