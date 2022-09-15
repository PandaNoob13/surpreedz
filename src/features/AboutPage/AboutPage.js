import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AboutPage.css"

function AboutPage() {
    return (
        <div className='text-white min-vh-100' style={{backgroundColor: "#212121", paddingTop: "3.5rem"}}>
            <div className="jumbotron mb-4" style={{backgroundImage: "linear-gradient(black, #212121)"}}>
                <div className='container'>
                    <div className='col-md-5 py-5 d-flex align-items-center'>
                        <div className='py-4'>
                            <h1 className="display-4">Surpreedz is where you connect with your favorite stars</h1>
                            <p>Access thousands of celebrities and request a personalized video message for any occasion.</p>
                            <p className="lead">
                                <NavLink reloadDocument to='/' className="nav-link" aria-current="page">
                                    <button className="btn btn-light btn-lg mt-3">Browse Stars</button>
                                </NavLink>
                            </p>    
                        </div>                   
                    </div>               
                </div>
            </div>            
            <div id='content'>
                <div className='container'>
                    <h3>How Surpreedz works?</h3>
                </div>
                <div className='container'>
                    <div className='row gx-4'>
                        <picture className='col-md d-flex justify-content-center'>
                            <img src="https://cdn.cameo.com/static/assets/search-for-a-star-1x.png" alt="" className="img-fluid mh-100"></img>
                        </picture>
                        <div className='col-md py-4 d-flex flex-column justify-content-center'>
                            <p className='mb-1' style={{color: "#2C2C2C"}}>1. SEARCH FOR A STAR</p>
                            <h1 className="display-5">Find the right celeb for any occasion</h1>
                            <p>Birthdays, milestones, or even a well-deserved roast, the perfect celebrity is only a search away. Find yours and request them.</p>   
                        </div>
                    </div>
                    <div className='row gx-4 row-direction-media-reverse'>
                        <div className='col-md py-4 d-flex flex-column justify-content-center'>
                            <p className='mb-1' style={{color: "#2C2C2C"}}>2. REQUEST THEM</p>
                            <h1 className="display-5">Get your personalized video message</h1>
                            <p>Include all the important details in your request form. After it’s submitted, stars have up to 3 days to complete it. Choose our 24hr delivery option if you need it sooner.</p>
                        </div>
                        <picture className='col-md d-flex justify-content-center'>
                            <img src="https://cdn.cameo.com/static/assets/img-get-video-1x.png" alt="" className="img-fluid mh-100"></img>
                        </picture>
                    </div>
                    <div className='row gx-4'>
                        <video className='col-md-6' autoPlay muted loop playsInline>
                            <source src="https://cdn.cameo.com/static/assets/img-share.mp4" type="video/mp4" media="(min-width: 768px)"></source>
                            <source src="https://cdn.cameo.com/static/assets/img-share.mp4" type="video/mp4"></source>
                        </video>
                        <div className='col-md py-4 d-flex flex-column justify-content-center'>
                            <p className='mb-1' style={{color: "#2C2C2C"}}>3. SHARE THE MAGIC</p>
                            <h1 className="display-5">Capture the WOW</h1>
                            <p>Magical moments deserve to be shared. Whether you’re giving one or receiving a personalized video, we want to see your reaction. Bonus points if you tag us.</p>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron" style={{backgroundImage: "linear-gradient(#212121, #383838, #212121)"}}>
                <div className='container'>
                    <div className='col-md-5 py-5 d-flex align-items-center'>
                        <div className='py-4'>
                            <h1 className="display-4">Find your Surpreedz match</h1>
                            <p>Looking for the perfect star for any occasion? Let us help you to get your most wanted celebrities.</p>
                            <p className="lead">
                                <NavLink reloadDocument to='/' className="nav-link" aria-current="page">
                                    <button className="btn btn-light btn-lg mt-3">Browse Stars</button>
                                </NavLink>
                            </p>    
                        </div>                   
                    </div>               
                </div>
            </div>            
        </div>
    )
}

export default AboutPage