import React from 'react'
import "./OccasionCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function OccasionCard(props) {
    const chooseIcon = (occasion) => {
        switch (occasion){
            case "Birthday":
                return <FontAwesomeIcon className='fa-2x' icon={solid("cake")} />
            case "Graduiation":
                return <FontAwesomeIcon className='fa-2x' icon={solid("graduation-cap")} />
            case "Surprise":
                return <FontAwesomeIcon className='fa-2x' icon={solid("face-surprise")} />
            case "Custom":
                return <FontAwesomeIcon className='fa-2x' icon={solid("comment-dots")} />
            default :
                return ""
        }
    }
    console.log("Occasion : ", props.occasion);
    
    return (
        <div className='icon'>
            <div className='d-flex flex-column align-items-center m-2'>
                <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                    {chooseIcon(props.occasion)}
                </div>
            <small>{props.occasion}</small>
            </div>
        </div>
    )
}

export default OccasionCard