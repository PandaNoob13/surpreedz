import { Modal } from "react-bootstrap"
import "./DetailRequest.css"

const DetailRequest = (props) => {
    const data = props.data
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
    >
        <div className="col-md-12 d-flex p-3 flex-column card bg-card">
            <Modal.Header closeButton className="text-white">
                <Modal.Title id="contained-modal-title-vcenter" className="col-md-10 d-flex p-2 flex-column">
                    <div className="col-md-12 text-white"><h4>Detail Request</h4></div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    {/* <div className="col-md-12 person-name">Order from {data.buyerName}</div> */}
                    <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-3 font-inter-r">Recipient name</div>
                        <div className="col-md-1 font-inter-r">:</div>
                        <div className="col-md-8 font-inter-w">{data.orderRequest.recipient_name}</div>
                    </div>

                    <div  className="col-md-12 d-flex flex-row">
                        <div className="col-md-3 font-inter-r">Message</div>
                        <div className="col-md-1 font-inter-r">:</div>
                        <div className="col-md-8 font-inter-w">{data.orderRequest.message}</div>
                    </div>

                    <div  className="col-md-12 d-flex flex-row">
                        <div className="col-md-3 font-inter-r">Personal</div>
                        <div className="col-md-1 font-inter-r">:</div>
                        <div className="col-md-8 font-inter-w">{data.orderRequest.description}</div>
                    </div>
            </Modal.Body>
                        

            <Modal.Footer>
            
            </Modal.Footer>

        </div>
        </Modal>
    )
}

export default DetailRequest
