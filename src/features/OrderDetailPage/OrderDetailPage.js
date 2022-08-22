import React from 'react'
import OccasionCard from '../../shared/components/OccasionCard/OccasionCard'
import PersonalisedMessageCard from '../../shared/components/PersonalisedMessageCard/PersonalisedMessageCard'
import ProfileCard from '../../shared/components/ProfileCard/ProfileCard'
import ReviewCard from '../../shared/components/ReviewCard/ReviewCard'
import VideoCarouselCard from '../../shared/components/VideoCarouselCard/VideoCarouselCard'

function OrderDetailPage() {
    return (
        <div className='text-white' style={{background: "#212121"}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-5 p-2'>
                        <ProfileCard />
                        <VideoCarouselCard />
                    </div>
                    <div className='col-md-7 p-2'>
                        <ReviewCard />
                        <OccasionCard />
                        <PersonalisedMessageCard />
                        <div className='d-flex justify-content-end'>
                            <a className="btn btn-light btn-lg mt-3" href="#" role="button">Send Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailPage