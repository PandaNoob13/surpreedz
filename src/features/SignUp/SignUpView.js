import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import EditAccount from "../../shared/components/EditProfileCard/EditAccount";
import "./signUpView.css"

const SignUpView = () => {
  const navigate = useNavigate();

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
                        {/* <EditAccount/> */}
                          <form className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                              <input className="form-control p-3 m-2" type="email" placeholder="Enter Your Email" />
                              <input className="form-control p-3 m-2" type="password" placeholder="Choose a Password" />
                              <button className="col-6 btn btn-light m-4"
                              onClick={handleContinue}
                              >Continue</button>
                              <div className="by-joining m-2 pb-2">By joining I agree to all policies from Surpreedz</div>                              
                              <div className="col-12" style={{border: "1px solid #000000"}}></div>
                              <div className="col-md-12 py-3 d-flex flex-row justify-content-center">
                                  <div className="already">Already a member?</div>
                                  <NavLink to='/sign-in' className="sign-in btn-link">Sign In</NavLink>
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
                          <input className="form-control p-3 m-2" type="text" placeholder="Enter your name" />
                          <input className="form-control p-3 m-2" type="text" placeholder="Enter your location" />


                          <div className="container justify-content-around row m-2">
                            <button className="col-md-5 btn btn-light m-2"
                            onClick={handleBack}
                            >Back</button>
                            <button className="col-md-5 btn btn-light m-2"
                            >Join</button>

                          </div>
                          
                          <div className="by-joining m-2 pb-2">By joining I agree to all policies from Surpreedz</div>                              
                          
                          <div className="col-md-12" style={{border: "1px solid #000000"}}></div>
                          <div className="col-md-12 p-3 d-flex flex-row justify-content-center">
                              <div className="already"> Already a member ?</div>
                              <NavLink to='/sign-in' className="sign-in btn-link">Sign In</NavLink>
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
