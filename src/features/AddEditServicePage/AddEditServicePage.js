import "./AddEditServicePage.css"

const AddEditServicePage = () => {
  return (
      <div className="col-md-12 servicecontainer"> 
            <div className= "col-md-10 requestcard">

                  <div className="title">Your Service</div>

                  <div className="col-md-11 line"></div>

                  <div className="col-md-11 name-service">
                        <div className="label-name">Name</div>
                        <input className="input-name" placeholder="Enter your name"/>
                  </div>

                  <div className="col-md-11 name-service">
                        <div className="label-name">Role</div>
                        <input className="input-name" placeholder="Enter your role"/>
                  </div>

                  <div className="col-md-11 name-service">
                        <div className="label-name">Description</div>
                        <textarea className="input-description" placeholder="Describe yourself"/>
                  </div>

                  <div className="col-md-11 name-service">
                        <div className="label-name">Price</div>
                        <input className="input-name" placeholder="Enter the price"/>
                  </div>

                  <div className="col-md-11 name-service">
                        <div className="label-name">Video</div>

                        <div className="all-input-video">
                        <div className="card-input-video">
                        <input className="input-video" type="file" accept="video/*"/>
                        </div>
                        <div className="card-input-video">
                        <input className="input-video" type="file" accept="video/*"/>
                        </div>
                        <div className="card-input-video">
                        <input className="input-video" type="file" accept="video/*"/>
                        </div>
                        <div className="card-input-video">
                        <input className="input-video" type="file" accept="video/*"/>
                        </div>

                        </div>
                  </div>

                  <div className="col-md-11 button-service">
                        <button className="button-cancel">Cancel</button>
                        <button  className="button-submit">Submit</button>
                  </div>
            </div>
      </div>
  )
}

export default AddEditServicePage
