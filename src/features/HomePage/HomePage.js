import React from 'react'
import ServiceCard from "../../../src/shared/components/ServiceCard/ServiceCard"
import "./HomePage.css"

function HomePage() {
  return (
    <div className='text-white min-vh-100' style={{background: "#212121", marginTop: "3.5rem"}}>
        <div className="jumbotron mb-4" style={{backgroundImage: "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/comedians3-1600899167.jpg')"}}>
            <div className='container'>
                <div className='col-md-4 py-5 d-flex align-items-center'>
                    <div className='py-4'>
                        <p className='mb-1' style={{color: "#FF8484"}}>COMEDIANS</p>
                        <hr className="col-1 m-0 mb-2" style={{borderTop: "5px solid"}}/>
                        <h1 className="display-4">Take this season to the next level with Surpreedz!</h1>
                        <p className="lead">
                            <a className="btn btn-light btn-lg mt-3" href="#" role="button">Learn more</a>
                        </p>    
                    </div>                   
                </div>               
            </div>
        </div>
        <div className='container pb-5'>
            <div className='container p-0'>
                <h3>Most Loved by Indonesian</h3>
            </div>
            <div className='container-fluid p-0'>
                <div className=' d-flex flex-row flex-nowrap overflow-scroll overflow-hidden scrollbar-hide'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
        <div className='container pb-5'>
            <div className='container p-0'>
                <h3>Comedian</h3>
            </div>
            <div className='container-fluid p-0'>
                <div className=' d-flex flex-row flex-nowrap overflow-scroll overflow-hidden scrollbar-hide'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage