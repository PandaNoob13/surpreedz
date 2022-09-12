import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import OccasionCard from '../../shared/components/OccasionCard/OccasionCard'
import PersonalisedMessageCard from '../../shared/components/PersonalisedMessageCard/PersonalisedMessageCard'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'
import VideoCarouselCard from '../../shared/components/VideoCarouselCard/VideoCarouselCard'
import {useAuth} from "../../shared/auth/UseAuth"
import useOrderService from './useOrderDetail'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from './state/OrderDetailAction'
import swal from 'sweetalert'


function OrderDetailPage() {
    const {token} = useAuth();
    const location = useLocation()
    const data = location.state
    const name = data.name
    const [occasion, setOccasion] = useState('')
    const [recipient, setRecipient] = useState('')
    const [message, setMessage] = useState('')
    const [description, setDescription] = useState('')
    const dueDate = new Date();
    const navigate = useNavigate()

    dueDate.setDate(dueDate.getDate() + 3)


    const dispatch = useDispatch();
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer)


    const handleOccasionChange = async (data) => {
        console.log("Handle occasion : ", data);
        setOccasion(data)
    }

    const handleRecipientChange = async (event) => {
        setRecipient(event.target.value)
        
    }

    const handleMessageChange = async (event) => {
        setMessage(event.target.value)
    }

    const handleDescriptionChange = async (event) => {
        setDescription(event.target.value)
    }

    const handleSendRequest = (event) => {
        event.preventDefault();
        dispatch(addOrder({serviceDetailId: data.serviceDetailId,
            dueDate: dueDate,
            occasion: occasion,
            recipient: recipient,
            message: message,
            description: description,
            price: data.price}))
        // console.log('addOrderDataResult', addOrderDataResult);
        swal({
            title:'Your request has been saved successfully',
            text:'Please complete the transaction !',
            icon:'success',
            buttons: false,
            timer: 2500,
        })     
    }

    useEffect(()=>{
        // console.log('addOrderData', addOrderData.serviceDetailId);
        console.log('addOrderData', addOrderDataResult);
        if (addOrderDataResult) {
          console.log('5. masuk use effect add order');
          if (token) {
            navigate('/purchase-confirmation')
          }else {
            navigate('/sign-in')
          }
        }
      },[addOrderDataResult,dispatch])

    return (
        <div className='text-white h-100 min-vh-100' style={{background: "#212121", marginTop: '50px'}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-5 p-2'>
                        {/* <VideoCarouselCard /> */}
                        <ProfileCard data={data} />
                        {/* <ReviewCard /> */}
                    </div>
                    <div className='col-md-7 p-2'>
                        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
                            <div className="card-body text-white">
                            <h4 className="card-title">{name} would help you with ...</h4>
                                <div className='occasion d-flex flex-row justify-content-center' id='occasion'>
                                    <button onClick={() => handleOccasionChange('Birthday')} style={{backgroundColor: 'transparent', border: 'none'}}><OccasionCard occasion={"Birthday"}/></button>
                                    <button onClick={() => handleOccasionChange('Graduation')} style={{backgroundColor: 'transparent', border: 'none'}}><OccasionCard occasion={"Graduation"}/></button>
                                    <button onClick={() => handleOccasionChange('Surprise')} style={{backgroundColor: 'transparent', border: 'none'}}><OccasionCard occasion={"Surprise"}/></button>
                                    <button onClick={() => handleOccasionChange('Other')} style={{backgroundColor: 'transparent', border: 'none'}}><OccasionCard occasion={"Other"}/></button>
                                </div>                
                            </div>
                        </div>
                        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
                            <div className="card-body">
                                <h4 className="card-title text-white mb-3">Your Personalised Message</h4>
                                    <div className="mb-3">
                                        <label htmlFor="inputForName" className="form-label text-white">Who is this message for?</label>
                                        <input type="text" className="form-control" placeholder={"Your parents, friends, or else"} id="inputForName" onChange={handleRecipientChange} value={recipient}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputMessages" className="form-label text-white">What should {name} say to the person?</label>
                                        <textarea type="text" className="form-control" placeholder={"Describe your messages"} id="inputMessages" onChange={handleMessageChange} value={message}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputClues" className="form-label text-white">What should {name} know about the person?</label>
                                        <textarea type="text" className="form-control" placeholder="Describe any clues for better delivery" id="inputClues" onChange={handleDescriptionChange} value={description}/>
                                    </div>
                            </div>
                        </div> 
                        <div className='d-flex justify-content-end'>
                             <div  className="btn btn-light btn-lg mt-3" onClick={handleSendRequest} >
                                    Send Request
                             </div>
                         </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailPage