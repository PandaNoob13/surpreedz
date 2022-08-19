import "./AddEditServicePage.css";
import VideoInput from "./videoInput/VideoInput";


const AddEditServicePage = () => {
  return (
      <div className="bg-request-page">
        <div className="container d-flex p-5 flex-column">
            <div className="col-md-12 d-flex p-5 flex-column card bg-card">
                  <div className="col-md-12 font-title ">
                        <h3>Your Service</h3>
                        <div className="hr"></div>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-2 form-label property-font">Name</div>
                        <input className="form-control" placeholder="Enter Your Name"/>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-2 form-label property-font">Role</div>
                        <input className="form-control" placeholder="Enter Your Role"/>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-2 form-label property-font">Description</div>
                        <textarea className="form-control" placeholder="Enter Your Description"/>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-2 form-label property-font">Price</div>
                        <input className="form-control" placeholder="Enter the price"/>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row">
                        <div className="col-md-2 form-label property-font">Videos</div>
                        <div className="col-md-10 d-flex flex-row justify-content-between">
                              <div className="col-md-3" style={{paddingRight:'5px'}}>
                              <VideoInput width={400} height={300} num={1} />
                              </div>
                              <div className="col-md-3" style={{paddingRight:'5px'}}>
                              <VideoInput width={400} height={300} num={2} />
                              </div>
                              <div className="col-md-3" style={{paddingRight:'5px'}}>
                              <VideoInput width={400} height={300} num={3} />
                              </div>
                              <div className="col-md-3" style={{paddingRight:'5px'}}>
                              <VideoInput width={400} height={300} num={4} />
                              </div>
                        </div>
                  </div>
                  <br/>

                  <div className="col-md-12 d-flex flex-row justify-content-end">
                        <button className="btn btn-light m-2">Cancel</button>
                        <button className="btn btn-light m-2">Submit</button>

                  </div>

            </div>


           
            
        </div>
    </div>
  )
}

export default AddEditServicePage
