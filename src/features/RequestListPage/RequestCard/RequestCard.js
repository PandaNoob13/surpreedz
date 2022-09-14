import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
        if (Object.keys(videoData).length !== 0) {
            setButtonDisable(false)
        }
    }, [videoData])

    useEffect(()=>{}, [buttonDisable])

    const handleSubmit = (value) => {
        if (value === 'Accept'){
            onPostService(data.orderId, "On progress")
        } else if (value === 'Reject'){
            onPostService(data.orderId, "Rejected")
        } else if (value === 'Submit') {
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
        if (status === 'Waiting for confirmation'){
            return (
            <div className="col-md-12 d-flex gap-2 mb-1">
                <div>
                     <button className="btn btn-light" onClick={() => handleSubmit('Accept')}>Accept</button>
                </div>
                <div>
                    <button className="btn btn-light" onClick={() => handleSubmit('Reject')}>Reject</button>
                </div>
            </div>
            )
        } else if (status === 'On progress') {
            return (
            <div className="col-md-12 d-flex flex-wrap justify-content-between gap-2 align-items-center mb-1">
                <div>
                    <input type="file" onChange={handleFileChange} accept=".mov,.mp4"/>
                </div>
                <div className="me-1">
                    <button disabled={buttonDisable} className="btn btn-light" onClick={() => handleSubmit('Submit')}>Submit Video</button>
                </div>
            </div>
            )
        } else {
            return (
            <></>
            )
        }
    }
    const useChooseIcon = (occasion) => {
        switch (occasion){
            case "Birthday":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("cake")} />
                    </div>
                )
            case "Graduation":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("graduation-cap")} />
                    </div>
                )
            case "Surprise":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("face-surprise")} />
                    </div>
                )
            case "Other":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("comment-dots")} />
                    </div>
                )
            default :
                return "";
        }
    }
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "100%", borderRadius: "12px", backgroundColor:"#373535"}}>
                <div className="row g-0">
                    <div className="col-md-7 d-flex flex-row align-items-center  p-3 gap-2">
                        <div className="col-md-2 d-flex flex-column align-items-center text-white">
                            {useChooseIcon(data.occasion)}
                            {data.occasion}
                        </div>
                        <div className="col-md-10 d-flex flex-column all-text-font align-content-around px-2">
                            <h4 style={{fontWeight: "normal"}}>
                                Message for {orderRequest.recipient_name}
                            </h4>
                            <div>
                                <Button className="btn btn-light" onClick={() => setModalShow(true)}>
                                    Request detail
                                </Button>
                            </div>
                            <DetailRequest
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                data={{
                                orderRequest: data.orderRequest,
                                buyerName: data.name
                                }}
                            />
                        </div>
                        {/* <div className="col-md-12 d-flex flex-row">
                                <div className="col-md-1 font-price">Price: </div>
                                <div className="col-md-1 font-price">:</div>
                                <div className="col-md-3 font-nominal">Rp {data.price}</div>
                        </div> */}
                    </div>
                    <div className="col-md-5 card-body text-white">
                        <p className="card-text mb-0"><small>Due date:</small></p>
                        <p className="card-text mb-2">{moment({dueDate}).format("MMMM Do YYYY")}</p>
                        <p className="card-text mb-0"><small>Status:</small></p>
                        <p className="card-text mb-2">{data.status}</p>
                        {StatusCondition(data.status)}
                    </div>
                </div>
            </div>
            {isLoading ? <Loading/> : <></>}
        </div>
    )
}

export default RequestCard;
