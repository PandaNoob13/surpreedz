import { useEffect, useState } from "react";
import "./ServicePage.css";
import useAddEditService from "./useAddEditService";
import VideoInput from "./videoInput/VideoInput";

const ServicePage = () => {
      var accountId = window.localStorage.getItem('account_id')
      var serviceDetailRole = window.localStorage.getItem('service_detail_role')
      var serviceDetailDesc = window.localStorage.getItem('service_detail_desc')
      var serviceDetailPrice = window.localStorage.getItem('service_detail_price')
      const {onPostService} = useAddEditService();
      const [role, setRole] = useState(serviceDetailRole)
      const [description, setDescription] = useState(serviceDetailDesc)
      const [price, setPrice] = useState(serviceDetailPrice)
      const [buttonDisabled, setButtonDisabled] = useState(true)
      const [dataVideo ,setDataVideo] = useState()

      const handleRoleChange = async (event) => {
            setRole(event.target.value)
      }

      const handleDescriptionChange = async (event) => {
            setDescription(event.target.value)
      }

      const handlePriceChange = async (event) => {
            setPrice(event.target.value)
      }

      const handleSubmit = async (event) => {
            event.preventDefault()
            onPostService(parseInt(accountId) ,role, description, parseInt(price),dataVideo)
      }

      const checkInputState = async () => {
            if (role != '' && description != '' && price != 0){
                 setButtonDisabled(false)
            } else {
                  setButtonDisabled(true)
            }
      }

      const onSubmitFileVideo = (videoFile) => {
            const formData = new FormData()
            formData.append('video',videoFile)
            setDataVideo(formData)
      }

      useEffect(() => {
            checkInputState()
      }, [role, description, price])
      return (
            <div className="bg-request-page h-100 min-vh-100">
            <div className="container d-flex p-5 flex-column">
                  <form id="service-form">
                        <div className="col-md-12 d-flex p-5 flex-column card bg-card">
                              <div className="col-md-12 font-title ">
                                    <h3>Your Service</h3>
                                    <div className="hr"></div>
                              </div>
                              <br/>

                              <div className="row">
                                    <label htmlFor="inputRole" className="col-md-2 col-form-label property-font">Role</label>
                                    <div className="col-md-10">
                                          <input className="form-control" id="inputRole" placeholder="What are you best known for?" onChange={handleRoleChange} value={role}/>                              
                                    </div>
                              </div>
                              <br/>

                              <div className="row">
                                    <div className="col-md-2 col-form-label property-font">Description</div>
                                    <div className="col-md-10">
                                          <textarea className="form-control" placeholder="Tell people about yourself" onChange={handleDescriptionChange} value={description}/>
                                    </div>
                              </div>
                              <br/>

                              <div className="row">
                                    <label htmlFor="inputPrice" className="col-md-2 col-form-label property-font">Price</label>
                                    <div className="col-md-10">
                                          <input className="form-control" id="inputPrice" placeholder="Insert your service price" onChange={handlePriceChange} value={price}/>                              
                                    </div>
                              </div>
                              <br/>

                              <div className="row justify-content-between">
                                    <label className="col-md-2 col-form-label property-font">Videos</label>
                                    <div className="col-md-10 row justify-content-end">
                                          <div className="col-lg-3 my-2" >
                                          <VideoInput num={1} videoNum={`video-`+1} onSubmitVideo={onSubmitFileVideo}/>
                                          {/* </div>
                                          <div className="col-lg-3 my-2" >
                                          <VideoInput num={2} videoNum={`video-`+2} />
                                          </div>
                                          <div className="col-lg-3 my-2" >
                                          <VideoInput num={3} videoNum={`video-`+3} />
                                          </div>
                                          <div className="col-lg-3 my-2" >
                                          <VideoInput num={4} videoNum={`video-`+4} /> */}
                                          </div>
                                    </div>
                              </div>
                              <br/>

                              <div className="col-md-12 row justify-content-end">
                                    {/* <button className="col-md-2 btn btn-light m-2">Reset</button> */}
                                    <button disabled={buttonDisabled} className="col-md-2 btn btn-light m-2" onClick={handleSubmit}>Submit</button>
                              </div>
                        </div>   
                  </form>
                  
            </div>
      </div>
      )
}

export default ServicePage;
