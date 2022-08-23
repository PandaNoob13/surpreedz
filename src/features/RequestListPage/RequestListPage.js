import RequestCard from "./RequestCard/RequestCard";
import "./RequestListPage.css"

const RequestListPage = () => {
  return (
    <div className="bg-request-page h-100 min-vh-100" style={{marginTop: "3.5rem"}}>
        <div className="container d-flex flex-column ">
            <div className="col-md-12 text-white ">
                <h3>Request List</h3>
            </div>
            <div className="col-md-12">
                <div className="hr"></div>
                <br/>
            </div>

            <RequestCard/>
            <RequestCard/>
            <RequestCard/>
            
        </div>
    </div>
    
  )
}

export default RequestListPage;
