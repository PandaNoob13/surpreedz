import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import OccasionCard from '../../shared/components/OccasionCard/OccasionCard'
import PersonalisedMessageCard from '../../shared/components/PersonalisedMessageCard/PersonalisedMessageCard'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'
import ReviewCard from '../../shared/components/ReviewCard/ReviewCard'
import VideoCarouselCard from '../../shared/components/VideoCarouselCard/VideoCarouselCard'
import {useAuth} from "../../shared/auth/UseAuth"

function OrderDetailPage() {
    const {token} = useAuth();
    

    return (
        <div className='text-white' style={{background: "#212121", marginTop: '50px'}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-5 p-2'>
                        <VideoCarouselCard />
                        <ProfileCard />
                        {/* <ReviewCard /> */}
                    </div>
                    <div className='col-md-7 p-2'>

                        <OccasionCard />
                        <PersonalisedMessageCard />
                        <div className='d-flex justify-content-end'>
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