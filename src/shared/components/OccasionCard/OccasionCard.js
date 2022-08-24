import React from 'react'
import "./OccasionCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function OccasionCard(props) {
    const name = props.name;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body text-white">
                <h4 className="card-title">{name} would help you with ...</h4>
                <div className='occasion d-flex flex-row justify-content-center' id='occasion'>
                    <a className='icon' href='#birthday'>
                        <div className='d-flex flex-column align-items-center m-2'>
                        <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                            <FontAwesomeIcon className='fa-2x' icon={solid("cake-candles")} />
                        </div>
                        <small>Birthday</small>
                    </div>
                    </a>
                    
                    <a className='icon' href='#graduation'>
                        <div className='d-flex flex-column align-items-center m-2'>
                        <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                            <FontAwesomeIcon className='fa-2x' icon={solid("graduation-cap")} />
                        </div>
                        <small>Graduation</small>
                    </div>
                    </a>
                    
                    <a className='icon' href='#surprise'>
                        <div className='d-flex flex-column align-items-center m-2'>
                        <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                            <FontAwesomeIcon className='fa-2x' icon={solid("face-surprise")} />
                        </div>
                        <small>Surprise</small>
                    </div>
                    </a>
                    
                    <a className='icon' href='#custom'>
                        <div className='d-flex flex-column align-items-center m-2'>
                        <div className='border border-3 rounded-circle d-flex align-items-center justify-content-center m-2' style={{width: "5rem", height: "5rem"}}>
                            <FontAwesomeIcon className='fa-2x' icon={solid("comment-dots")} />
                        </div>
                        <small>Tell Us!</small>
                    </div>
                    </a>
                    
                </div>                
            </div>
        </div>
    )
}

export default OccasionCard