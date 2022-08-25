import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useLocation, useNavigate } from "react-router-dom";
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
                            {data.occasion} greeting
                        </div>
                </div>

                <div className="line"></div>

                <div className="title-invoice">
                        <div className="what-service">
                                {data.occasion} greeting
                        </div>
                        <div className="price-service">
                                Rp. {price}
                        </div>
                </div>

                <div className="detail-invoice">
                    <table className="font-detail-invoice">
                        <thead></thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <div className="title-invoice">
                    <div className="total">TOTAL</div>
                    <div className="price-service">Rp. {price}</div>
                </div>

                <div className="title-invoice">
                    <div className="what-service">total delivery days</div>
                    <div className="price-service">5 days</div>
                </div>


                <div className="box-button-confirm">
                    <button onClick={handleSubmit} className="confirm">Confirm & Pay</button>
                </div>


            </div>
            <div className="col-md-1"></div>
        
        </div>
  )
}

export default PurchaseConfirmationPage;
