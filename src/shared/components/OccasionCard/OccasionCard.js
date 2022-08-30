import React, { useEffect, useState } from 'react'
import "./OccasionCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function OccasionCard(props) {
    const useChooseIcon = (occasion) => {
        useEffect(() => {
            const elements = document.querySelectorAll('.icon')
            elements.forEach(el => {
                el.addEventListener('click', () => {
                    elements.forEach(el => el.classList.remove('active-occasion'))
                    el.classList.add('active-occasion')
                })})
        });

        switch (occasion){
            case "Birthday":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("cake")} />
                    </div>
                )
            case "Graduation":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("graduation-cap")} />
                    </div>
                )
            case "Surprise":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("face-surprise")} />
                    </div>
                )
            case "Other":
                return (
                    <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                        <FontAwesomeIcon className='fa-2x' icon={solid("comment-dots")} />
                    </div>
                )
            default :
                return "";
        }
    }
    
    
    return (
        <div className='icon'>
            <div className='d-flex flex-column align-items-center m-2'>
                {useChooseIcon(props.occasion)}
            <small>{props.occasion}</small>
            </div>
        </div>
    )
}

export default OccasionCard