import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink } from "react-router-dom";


const PurchaseConfirmationPage = () => {
  return (
    <div style={{backgroundColor:'#212121'}}>
    <div className="container">

        <div className="d-flex flex-row justify-content-around align-items-center min-vh-100 py-auto">
                <div className="col-md-6 card d-flex flex-column p-3" style={{backgroundColor:'#373535'}}>
                        <div className="col-md-11 title-payment"><h3>Payment Option</h3></div>
                        <div className="col-md-11  line"></div>
                        <div className="col-md-12 d-flex flex-row justify-content-around mt-5 mb-3">
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                        </div>
                        <div className="col-md-6 card bg-dark mt-3 mb-3">
                            <h5 className="no-ewallet">+628XXXXXXXXXX</h5>
                        </div>
                        <div className="col-md-12 d-flex flex-row justify-content-around mt-5 mb-3">
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                            <img className="img-thumbnail" src="" alt="" />
                        </div>
                        <div className="col-md-6 card bg-dark mt-3 mb-3">
                            <h5 className="no-ewallet">XXXXXXXXXXXXX</h5>
                        </div>
                        
                </div>
                
                <div className="col-md-4 card p-3" style={{backgroundColor:'#373535'}}>
                       <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                            <img className="col-md-4 img-thumbnail" src="" alt=""></img>
                            <div className="col-md-6 font-general m-3"><h4>Graduation Greeting</h4></div>
                       </div>
                       <div className="col-md-11 line mb-2 mt-3"></div>
                       <div className="col-md-12 d-flex flex-row ">
                            <div className="col-md-9 font-general">Graduation greeting</div>
                            <div className="col-md-3 font-general">Rp 575K</div>
                       </div>
                       <div className="col-md-10 card detail-invoice m-4">
                        <table className="">
                            <thead></thead>
                            <tbody>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-12 d-flex flex-row mb-2">
                        <div className="col-md-9 font-general">Service fee</div>
                        <div className="col-md-3 font-general">Rp 25K</div>
                    </div>

                    <div className="col-md-12 d-flex flex-row mb-2">
                        <div className="col-md-9 font-general">Total</div>
                        <div className="col-md-3 font-general">Rp 600K</div>
                    </div>

                    <div className="col-md-12 d-flex flex-row mb-2">
                        <div className="col-md-9 font-general">Delivery in</div>
                        <div className="col-md-3 font-general">5 days</div>
                    </div>


                    <div className="col-md-12 d-flex flex-row justify-content-around mb-4 mt-4">
                        <NavLink to='/' className="col-md-10 btn btn-light button-confirm" >Confirm & Pay</NavLink>
                    </div>



                </div>

        
        </div>
    </div>
</div>
  )
}

export default PurchaseConfirmationPage;
