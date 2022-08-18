import { useState } from "react";
import { Button } from "react-bootstrap";
import DetailRequest from "../DetailRequest/DetailRequest"
import "./RequestCard.css"

export const propertiCard ={
   image: "https://i.pinimg.com/originals/b5/a1/d3/b5a1d3fd7035c37da7d8ea47a5027546.png",
   occasions:"Birthday",
   name:"Sumail Hasan",
   nominal:1000000,
   date:['Due Date', 'Last Confirmation Date'],
   status:['-','OnProgress','REJECTED']
}


const RequestCard = () => {
  const [modalShow, setModalShow] = useState(false);




  return (
    <div>
    <div className="col-md-12 d-flex flex-row card bg-card">
                 <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                        <div className="col-md-10 text-center">
                           <img className="rounded-circle bg-request-page" style={{width:'50%'}} src={propertiCard.image} alt="" />
                        </div>
                        <div className="col-md-10 text-center all-text-font">{propertiCard.occasions}</div>
                 </div>

                 <div className="vr line-vertikal" ></div>

                 <div className="col-md-8 d-flex p-2 flex-column justify-content-around">
                    <div className="col-md-10 all-text-font" style={{fontSize:'32px'}}>{propertiCard.name}</div>

                    <div className="col-md-12 d-flex flex-row">
                           <div className="col-md-3 font-price" >Price</div>
                           <div className="col-md-1 font-price">:</div>
                           <div className="col-md-7 font-nominal">Rp {propertiCard.nominal}</div>
                    </div>

                  <div className="col-md-6">
                           <Button className="btn btn-light" onClick={() => setModalShow(true)}>! Detail Request</Button>

                           <DetailRequest
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                           />


                  </div>
                 </div>

                 <div className="vr line-vertikal" ></div>

                 <div className="col-md-3 d-flex p-2 flex-column justify-content-between">
                     <div className="col-md-11 font-price">{propertiCard.date[1]}:</div>
                     <div className="col-md-11 text-center font-nominal">17-08-2022 00:00:00 WIB</div>
                     <div className="col-md-11 font-price"> Status :</div>
                     <div className="col-md-11 text-center font-nominal">
                        {propertiCard.status[2]}
                     </div>
                     <div className="col-md-11 text-center">
                        {/* <button className="btn btn-light m-2">Submit Video</button> */}

                        {/* <button className="btn btn-light m-2">Accept</button>
                        <button className="btn btn-light m-2">Reject</button> */}

                     </div>
                 </div>
            </div>

            <div>
                <br/>
            </div>
     </div>
  )
}

export default RequestCard;
