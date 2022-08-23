import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink } from "react-bootstrap";



const PurchaseConfirmationPage = () => {
  return (
    <div style={{backgroundColor:'#212121'}}>
        <div className="container">
            <div className="d-flex flex-row justify-content-around align-items-center">
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
                                <h5 className="no-ewallet">+628712345678</h5>
                            </div>
                            <div className="col-md-12 d-flex flex-row justify-content-around mt-5 mb-3">
                                <img className="img-thumbnail" src="" alt="" />
                                <img className="img-thumbnail" src="" alt="" />
                                <img className="img-thumbnail" src="" alt="" />
                                <img className="img-thumbnail" src="" alt="" />
                            </div>
                            <div className="col-md-6 card bg-dark mt-3 mb-3">
                                <h5 className="no-ewallet">123456789</h5>
                            </div>
                            
                    </div>

                    <div className="col-md-4 card p-3" style={{backgroundColor:'#373535'}}>
                           <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                                <img className="col-md-4 img-thumbnail" src="https://jabarekspres.com/wp-content/uploads/2020/11/Gisel-.jpg" alt=""></img>
                                <div className="col-md-6 font-general m-3"><h4>Graduation Greeting From Gisele</h4></div>
                           </div>
                           <div className="col-md-11 line mb-2 mt-3"></div>
                           <div className="col-md-12 d-flex flex-row ">
                                <div className="col-md-9 font-general">Graduation greeting</div>
                                <div className="col-md-3 font-general">Rp.575K</div>
                           </div>
                           <div className="col-md-10 card detail-invoice m-4">
                            <table className="">
                                <thead></thead>
                                <tbody>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                {/* <tr>
                                    <td><FontAwesomeIcon icon={regular('circle-check')} /></td>
                                    <td>1 revision</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td>a minute length</td>
                                </tr>
                                <tr>
                                    <td> </td>
                                    <td>high quality video file</td>
                                </tr> */}
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-12 d-flex flex-row mb-2">
                            <div className="col-md-9 font-general">service fee</div>
                            <div className="col-md-3 font-general">Rp 25K</div>
                        </div>

                        <div className="col-md-12 d-flex flex-row mb-2">
                            <div className="col-md-9 font-general">TOTAL</div>
                            <div className="col-md-3 font-general">600K</div>
                        </div>

                        <div className="col-md-12 d-flex flex-row mb-2">
                            <div className="col-md-9 font-general">total delivery days</div>
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
