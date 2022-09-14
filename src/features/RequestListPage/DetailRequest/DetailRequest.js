import { Modal } from "react-bootstrap"
import "./DetailRequest.css"

const DetailRequest = (props) => {
    const data = props.data
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="col-md-12 d-flex flex-column card bg-card text-white">
                    <Modal.Header closeButton className="text-white">
                        <Modal.Title id="contained-modal-title-vcenter" className="">
                            <div className="col-md-12 text-white">Detail Request</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="col-md-12 d-flex flex-column">
                                <p className="card-text mb-0"><small>Recipient name:</small></p>
                                <p className="card-text mb-2">{data.orderRequest.recipient_name}</p>
                                {/* <div className="col-md-4">Recipient name</div>
                                <div className="col-md-1">:</div>
                                <div className="col-md-7">{data.orderRequest.recipient_name}</div> */}
                            </div>

                            <div  className="col-md-12 d-flex flex-column">
                                <p className="card-text mb-0"><small>Message:</small></p>
                                <p className="card-text mb-2">{data.orderRequest.message}</p>
                                {/* <div className="col-md-4">Message</div>
                                <div className="col-md-1">:</div>
                                <div className="col-md-7">{data.orderRequest.message}</div> */}
                            </div>

                            <div  className="col-md-12 d-flex flex-column">
                                <p className="card-text mb-0"><small>Description:</small></p>
                                <p className="card-text mb-2">{data.orderRequest.description}</p>
                                {/* <div className="col-md-4">Description</div>
                                <div className="col-md-1">:</div>
                                <div className="col-md-7">{data.orderRequest.description}</div> */}
                            </div>
                    </Modal.Body>
                                

                    <Modal.Footer>
                    
                    </Modal.Footer>

                </div>
            </Modal>
        </div>
        
    )
}

export default DetailRequest
