import "./ServicePage.css";
import VideoInput from "./videoInput/VideoInput";


const ServicePage = () => {
  return (
      <div className="bg-request-page h-100 min-vh-100">
        <div className="container d-flex p-5 flex-column">
            <div className="col-md-12 d-flex p-5 flex-column card bg-card">
                  <div className="col-md-12 font-title ">
                        <h3>Your Service</h3>
                        <div className="hr"></div>
                  </div>
                  <br/>

                  <div className="row">
                        <label for="inputName" className="col-md-2 col-form-label property-font">Name</label>
                        <div className="col-md-10">
                              <input className="form-control" id="inputName" placeholder="Enter Your Name"/>                              
                        </div>
                  </div>
                  <br/>

                  <div className="row">
                        <label for="inputRole" className="col-md-2 col-form-label property-font">Role</label>
                        <div className="col-md-10">
                              <input className="form-control" id="inputRole" placeholder="Enter Your Role"/>                              
                        </div>
                  </div>
                  <br/>

                  <div className="row">
                        <div className="col-md-2 col-form-label property-font">Description</div>
                        <div className="col-md-10">
                              <textarea className="form-control" placeholder="Enter Your Description"/>
                        </div>
                  </div>
                  <br/>

                  <div className="row">
                        <label for="inputPrice" className="col-md-2 col-form-label property-font">Price</label>
                        <div className="col-md-10">
                              <input className="form-control" id="inputPrice" placeholder="Enter the price"/>                              
                        </div>
                  </div>
                  <br/>

                  <div className="row justify-content-around">
                        <label className="col-md-2 col-form-label property-font">Videos</label>
                        <div className="col-md-10 row justify-content-around">
                              <div className="col-lg-3 my-2" >
                              <VideoInput width={400} height={300} num={1} />
                              </div>
                              <div className="col-lg-3 my-2" >
                              <VideoInput width={400} height={300} num={2} />
                              </div>
                              <div className="col-lg-3 my-2" >
                              <VideoInput width={400} height={300} num={3} />
                              </div>
                              <div className="col-lg-3 my-2" >
                              <VideoInput width={400} height={300} num={4} />
                              </div>
                        </div>
                  </div>
                  <br/>

                  <div className="col-md-12 row justify-content-end">
                        <button className="col-md-2 btn btn-light m-2">Cancel</button>
                        <button className="col-md-2 btn btn-light m-2">Submit</button>
                  </div>
            </div>     
        </div>
    </div>
  )
}

export default ServicePage;
