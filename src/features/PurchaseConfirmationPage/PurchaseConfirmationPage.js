import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { NavLink } from "react-bootstrap";



const PurchaseConfirmationPage = () => {
  return (
    <div className="col-md-12 purchase-confirmation-container">
        <div className="col-md-1"></div>
        <div className="col-md-5 payment-option">
            
            <div className="title-payment">
                    Payment Option
            </div>
            <div className="line"></div>
            
            <div className="ewallet-bank">
            <div style={{display:'flex', justifyContent:'flex-start'}}>
                <img className="img-ewallet" src="" alt="" />
                <img className="img-ewallet" src="" alt="" />
                <img className="img-ewallet" src="" alt="" />
                <img className="img-ewallet" src="" alt="" />
            </div>
            <div className="no-ewallet">
                <h3>+628712345678</h3>
            </div>
            <div style={{display:'flex', justifyContent:'flex-start'}}>
                <img className="img-bank" src="" alt=""></img>
                <img  className="img-bank" src="" alt="" />
            </div>
            <div className="no-bank">
                <h3>123456789</h3>
            </div>
            </div>

        </div>

        <div className="col-md-1"></div>

        <div className="col-md-3 invoice">
            <div className="service">
                    <img className="img-service" src="" alt="">
                    </img>
                    <div className="title-service">
                        Graduation greeting
                    </div>
            </div>

            <div className="line"></div>

            <div className="title-invoice">
                    <div className="what-service">
                            Graduation greeting
                    </div>
                    <div className="price-service">
                            Rp. 575K
                    </div>
            </div>

            <div className="detail-invoice">
                <table className="font-detail-invoice">
                    <thead></thead>
                    <tbody>
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

            <div className="title-invoice">
                <div className="what-service">service fee</div>
                <div className="price-service">Rp 25K</div>
            </div>

            <div className="title-invoice">
                <div className="total">TOTAL</div>
                <div className="price-service">600K</div>
            </div>

            <div className="title-invoice">
                <div className="what-service">total delivery days</div>
                <div className="price-service">5 days</div>
            </div>


            <div className="box-button-confirm">
                <NavLink to='/' className="confirm">Confirm & Pay</NavLink>
            </div>


        </div>
        <div className="col-md-1"></div>
      
    </div>
  )
}

export default PurchaseConfirmationPage;
