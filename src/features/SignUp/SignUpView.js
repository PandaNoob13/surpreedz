import { React, useState } from "react"
import "./signUpView.css"

const SignUpView = () => {

  const [step,setStep]= useState(1);

  const handleContinue = () => {
      setStep(step + 1);
  }

  const handleBack =  () => {
    setStep(step - 1);
  }

  switch (step) {
    case 1:
      return(
        <div className="bg-request-page ">
              <div className="container d-flex flex-column min-vh-100 py-auto">
                  <div className="row my-auto">
                      <div className="col-md-8 my-auto px-2 py-4">
                          <div className="welcometext m-2">Welcome to Surpreedz</div>
                          <div className="col-lg-6 hr m-2"></div>
                          <div className="liberate m-2">Sign up to liberate out expressions</div>
                      </div>
    
                      <div className="col-lg-4 card bg-card align-self-center align-items-center">
                          <form className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                              <input className="form-control p-3 m-4" placeholder="Enter Your Email" />
                              <button className="col-6 btn btn-light"
                              onClick={handleContinue}
                              >Continue</button>
                              <div className="by-joining m-2 pb-2">By joining I agree to receive emails from Surpreedz</div>
                              
                              <div className="col-12" style={{border: "1px solid #000000"}}></div>
                              <div className="col-md-12 py-3 d-flex flex-row justify-content-center">
                                  <div className="already">Already a member?</div>
                                  <div className="sign-in btn-link">Sign In</div>
                              </div>
                          </form> 
                      </div>
                  </div>
              </div>
        </div>
      );
      case 2:
        return (
          <div className="bg-request-page min-vh-100">
          <div className="container d-flex flex-column min-vh-100 py-auto">
                <div className="row my-auto">
                    <div className="col-md-8 my-auto px-2 py-4">
                        <div className="welcometext m-2">Welcome to Surpreedz</div>
                        <div className="col-lg-6 hr m-2"></div>
                        <div className="liberate m-2">Sign up to liberate out expressions</div>
                    </div>
                    <div className="col-lg-4 card bg-card align-self-center align-items-center">
                          <form className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2" placeholder="Choose a Username" />
                          <input className="form-control p-3 m-2" placeholder="Choose a Password" />

                          <div className="container justify-content-around row m-2">
                            <button className="col-md-5 btn btn-light m-1"
                            onClick={handleBack}
                            >Back</button>
                            <button className="col-md-5 btn btn-light m-1"
                            >Join</button>

                          </div>
                          
                          <div className="by-joining m-2 pb-2">By joining, you agree to Surpreedz's Terms of Service, as well as to receive occasional emails from us</div>
                          
                          <div className="col-md-12" style={{border: "1px solid #000000"}}></div>
                          <div className="col-md-12 p-3 d-flex flex-row justify-content-center">
                              <div className="already"> Already a member ?</div>
                              <div className="sign-in btn-link"> Sign In</div>
                          </div>
                      </form> 
                  </div>
              </div>
          </div>
    </div>
        );
      default:
         break;
  }
}

export default SignUpView;
