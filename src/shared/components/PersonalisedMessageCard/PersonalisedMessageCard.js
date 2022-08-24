import React from 'react'
// import "./PersonalisedMessageCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function PersonalisedMessageCard(props) {
    const name = props.name;

    return (
        <div className="card mb-3 py-3" style={{borderRadius: "12px", backgroundColor:"#373535"}}>
            <div className="card-body">
                <h4 className="card-title text-white mb-3">Your Personalised Message</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputForName" className="form-label text-white">Who is this message for?</label>
                        <input type="text" className="form-control" placeholder={"Your parents, friends, or else"} id="inputForName"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMessages" className="form-label text-white">What should {name} say to the person?</label>
                        <textarea type="text" className="form-control" placeholder={"Describe your messages"} id="inputMessages"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputClues" className="form-label text-white">What should {name} know about the person?</label>
                        <textarea type="text" className="form-control" placeholder="Describe any clues for better delivery" id="inputClues"/>
                    </div>
                </form>
            </div>
        </div>  
    )
}

export default PersonalisedMessageCard