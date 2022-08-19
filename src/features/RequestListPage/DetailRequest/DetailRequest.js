import { Modal } from "react-bootstrap"
import "./DetailRequest.css"

const DetailRequest = (props) => {
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
            <div className="col-md-12 person-name">Nama Orang</div>

                <div className="col-md-12 d-flex flex-row">
                    <div className="col-md-3 font-inter-r">To</div>
                    <div className="col-md-1 font-inter-r">:</div>
                    <div className="col-md-8 font-inter-w">Orang Tujuan</div>
                </div>

                <div  className="col-md-12 d-flex flex-row">
                    <div className="col-md-3 font-inter-r">Message</div>
                    <div className="col-md-1 font-inter-r">:</div>
                    <div className="col-md-8 font-inter-w">Pesannya taruh disini</div>
                </div>

                <div  className="col-md-12 d-flex flex-row">
                    <div className="col-md-3 font-inter-r">Personal</div>
                    <div className="col-md-1 font-inter-r">:</div>
                    <div className="col-md-8 font-inter-w">Isi personalnya</div>
                </div>
        </Modal.Body>
                    

        <Modal.Footer>
        
        </Modal.Footer>

      </div>
     </Modal>
  )
}

export default DetailRequest
