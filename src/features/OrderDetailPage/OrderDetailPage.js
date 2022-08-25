import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import OccasionCard from '../../shared/components/OccasionCard/OccasionCard'
import PersonalisedMessageCard from '../../shared/components/PersonalisedMessageCard/PersonalisedMessageCard'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'
import VideoCarouselCard from '../../shared/components/VideoCarouselCard/VideoCarouselCard'
import {useAuth} from "../../shared/auth/UseAuth"


function OrderDetailPage() {
    const {token} = useAuth();
    const location = useLocation()
    const data = location.state
    const name = data.name
    console.log("Location Data : ", data);
    return (
        <div className='text-white' style={{background: "#212121", marginTop: '50px'}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-5 p-2'>
                        <VideoCarouselCard />
                        <ProfileCard data={data} />
                        {/* <ReviewCard /> */}
                    </div>
                    <div className='col-md-7 p-2'>
                        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
                            <div className="card-body text-white">
                            <h4 className="card-title">{name} would help you with ...</h4>
                                <div className='occasion d-flex flex-row justify-content-center' id='occasion'>
                                    <OccasionCard occasion={"Birthday"}/>
                                    <OccasionCard occasion={"Graduation"}/>
                                    <OccasionCard occasion={"Surprise"}/>
                                    <OccasionCard occasion={"Other"}/>
                                </div>                
                            </div>
                        </div>
                        <PersonalisedMessageCard name={data.name} />
                        <div className='d-flex justify-content-end'>
                             {/* <NavLink to='/purchase-confirmation' className="btn btn-light btn-lg mt-3" role="button">Send Request</NavLink> */}
                             { token ? <NavLink to='/purchase-confirmation' className="btn btn-light btn-lg mt-3" role="button">Send Request</NavLink>
                             :
                             <NavLink to='/sign-in' className="btn btn-light btn-lg mt-3" role="button">Send Request</NavLink>
                         }
                         </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailPage