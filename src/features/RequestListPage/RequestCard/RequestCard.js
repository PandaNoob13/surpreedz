import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../../shared/components/Loading/Loading";
import DetailRequest from "../DetailRequest/DetailRequest"
import useRequestListService from "../UseRequestListPage";
import moment from "moment";
import "./RequestCard.css"

const RequestCard = (props) => {
   const [modalShow, setModalShow] = useState(false);
   const [videoData, setVideoData] = useState({})
   const [buttonDisable, setButtonDisable] = useState(true)
   const {onPostService, onPostVideoResult, isLoading} = useRequestListService();
   const data = props.data
   const dueDate = data.dueDate
   const orderRequest = data.orderRequest
   // console.log("Data to be sent to detail : ", data.orderRequest);

   useEffect(() => {
      if (Object.keys(videoData).length != 0) {
         setButtonDisable(false)
      }
   }, [videoData])

   useEffect(()=>{}, [buttonDisable])

   const handleSubmit = (value) => {
      if (value == 'Accept'){
         onPostService(data.orderId, "On progress")
      } else if (value == 'Reject'){
         onPostService(data.orderId, "Rejected")
      } else if (value == 'Submit') {
         console.log("Url video : ", videoData.dataUrl);
         onPostService(data.orderId, "Submitted")
         onPostVideoResult(data.orderId, videoData.dataUrl)
      }
      props.callback()
   }

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log("Type of file ", typeof file);
      console.log('file => ', file);
      const url = URL.createObjectURL(file);
      console.log("File name : ", file.name);
      var result = ''
      let reader = new FileReader();
      if (data) {
          reader.readAsDataURL(file);
          reader.onload = function() {
              console.log("Data read : ", reader.result);
              result = reader.result
              console.log("READER RESULT : ", result);
              setVideoData({
                  videoFile: file,
                  videoName: file.name,
                  videoUrl: url,
                  dataUrl: result
              })
          };
          reader.onerror = function() {
          console.log(reader.error);
      };}
  };

   const StatusCondition = (status) => {
      if (status == 'Waiting for confirmation'){
         return (
            <div className="col-md-11 text-center">
               <button className="btn btn-light m-2" onClick={() => handleSubmit('Accept')}>Accept</button>
               <button className="btn btn-light m-2" onClick={() => handleSubmit('Reject')}>Reject</button>
            </div>
         )
      } else if (status == 'On progress') {
         return (
            <div className="col-md-11 text-center">
               <div style={{margin:'15px'}}>
                  <input type="file" onChange={handleFileChange} accept=".mov,.mp4"/>
               </div>
               <button disabled={buttonDisable} className="btn btn-light m-2" onClick={() => handleSubmit('Submit')}>Submit Video</button>
            </div>
         )
      } else {
         return (
            <></>
         )
      }
   }
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
                     <div className="col-md-10 all-text-font" style={{fontSize:'28px'}}>Message for {orderRequest.recipient_name}</div>

                     {/* <div className="col-md-12 d-flex flex-row">
                              <div className="col-md-1 font-price">Price: </div>
                              <div className="col-md-1 font-price">:</div>
                              <div className="col-md-3 font-nominal">Rp {data.price}</div>
                     </div> */}
                     <div className="col-md-6">
                           <br/>
                              <Button className="btn btn-light" onClick={() => setModalShow(true)}>Request detail</Button>
                              <DetailRequest
                                 show={modalShow}
                                 onHide={() => setModalShow(false)}
                                 data={{
                                    orderRequest: data.orderRequest,
                                    buyerName: data.name
                                 }}
                              />


                     </div>
                  </div>

                  <div className="vr line-vertikal" ></div>

                  <div className="col-md-3 d-flex p-2 flex-column justify-content-between">
                        <div className="col-md-11 font-price">Due date: {moment({dueDate}).format("MMMM Do YYYY")}</div>
                        {/* <div className="col-md-11 text-center font-nominal">{moment({dueDate}).format("MMMM Do YYYY")}</div> */}
                        <div className="col-md-11 font-price">Status: {data.status}</div>
                        {/* <div className="col-md-11 text-center font-nominal">{data.status}</div> */}
                        <div className="col-md-11 text-center">
                           {StatusCondition(data.status)}
                        </div>
                  </div>
               </div>

               <div>
                  <br/>
               </div>
               {isLoading ? <Loading/> : <></>}
      </div>
   )
}

export default RequestCard;
