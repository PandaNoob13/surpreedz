import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PurchaseConfirmationPage.css"
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



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
                <img className="img-ewallet" src="https://cdn.kibrispdr.org/data/101/download-logo-dana-4.png" alt="" />
                <img className="img-ewallet" src="https://kerjoku.com/wp-content/uploads/job-manager-uploads/company_logo/2021/08/ovo.png" alt="" />
                <img className="img-ewallet" src="https://1.bp.blogspot.com/-GjCpjdW8Hrs/XkXUvE0RseI/AAAAAAAABmk/u5e1zr7RGHQN2TFwPu1IoN8QJBtwXLH5QCLcBGAsYHQ/s400/Logo%2BLink%2BAja%2521.png" alt="" />
                <img className="img-ewallet" src="https://crm.thetempogroup.com/api/v1/media/product_image/image/6" alt="" />
            </div>
            <div className="no-ewallet">
                <h3>+628712345678</h3>
            </div>
            <div style={{display:'flex', justifyContent:'flex-start'}}>
                <img className="img-bank" src="https://www.banksinarmas.com/id/public/revamp/logoj.png" alt=""></img>
                <img  className="img-bank" src="https://www.banksinarmas.com/id/public/revamp/logosyariah1.png" alt="" />
            </div>
            <div className="no-bank">
                <h3>123456789</h3>
            </div>
            </div>

        </div>

        <div className="col-md-1"></div>

        <div className="col-md-3 invoice">
            <div className="service">
                    <img className="img-service" src="https://img.okezone.com/content/2022/05/31/455/2603393/sumber-kekayaan-livy-renata-selebgram-cantik-yang-dihujat-netizen-r4mA27iuP4.jpg" alt="">
                    </img>
                    <div className="title-service">
                        Graduation greeting from Livy Renata
                    </div>
            </div>

            <div className="line"></div>

            <div className="title-invoice">
                    <div className="what-service">
                            1 minute graduation greeting
                    </div>
                    <div className="price-service">
                            Rp. 575K
                    </div>
            </div>

            <div className="detail-invoice">
                <table className="font-detail-invoice">
                    <thead></thead>
                    <tbody>
                    <tr>
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
                    </tr>
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
                <button className="confirm">Confirm & Pay</button>
            </div>


        </div>
        <div className="col-md-1"></div>
      
    </div>
  )
}

export default PurchaseConfirmationPage;
