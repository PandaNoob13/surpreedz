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
   status:['Waiting for confirmation','On progress','Rejected']
}

const StatusCondition = (status) => {
   if (status == 'Waiting for confirmation'){
      return (
         <div className="col-md-11 text-center">
            <button className="btn btn-light m-2">Accept</button>
            <button className="btn btn-light m-2">Reject</button>
         </div>
      )
   } else if (status == 'On progress') {
      return (
         <div className="col-md-11 text-center">
            <button className="btn btn-light m-2">Submit Video</button>
         </div>
      )
   }
}

const RequestCard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const data = props.data
  return (
    <div>
    <div className="col-md-12 d-flex flex-row card bg-card">
                 <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                        {/* <div className="col-md-10 text-center">
                           <img className="rounded-circle bg-request-page" style={{width:'50%'}} src={propertiCard.image} alt="" />
                        </div> */}
                        <div className="col-md-10 text-center all-text-font">{data.occasion}</div>
                 </div>

                 <div className="vr line-vertikal" ></div>

                 <div className="col-md-8 d-flex p-2 flex-column justify-content-around">
                    <div className="col-md-10 all-text-font" style={{fontSize:'32px'}}>{data.name}</div>

                    <div className="col-md-12 d-flex flex-row">
                           <div className="col-md-1 font-price">Price: </div>
                           {/* <div className="col-md-1 font-price">:</div> */}
                           <div className="col-md-3 font-nominal">Rp {data.price}</div>
                    </div>

                  <div className="col-md-6">
                           <Button className="btn btn-light" onClick={() => setModalShow(true)}>Request detail</Button>
                           <DetailRequest
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                           />


                  </div>
                 </div>

                 <div className="vr line-vertikal" ></div>

                 <div className="col-md-3 d-flex p-2 flex-column justify-content-between">
                     <div className="col-md-11 font-price">{propertiCard.date[1]}:</div>
                     <div className="col-md-11 text-center font-nominal">{data.dueDate}</div>
                     <div className="col-md-11 font-price">Status :</div>
                     <div className="col-md-11 text-center font-nominal">{data.status}</div>
                     <div className="col-md-11 text-center">
                        {StatusCondition(data.status)}
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
