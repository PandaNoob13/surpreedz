import { useState } from "react"
import { useNavigate } from "react-router-dom";
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
        <div className="bg-request-page">
              <div className="container">
                <br/>
                <br/>
                <br/>
                  <div className="col-md-12 d-flex align-items-center flex-row justify-content-around">
                      <div className="col-md-4 align-self-center">
                          <div className="welcometext m-2">Welcome to Surpreedz</div>
                          <div className="col-md-6 hr m-2"></div>
                          <div className="liberate m-2">Sign up to liberate out expressions</div>
                      </div>
    
                      <div className="col-md-4 card bg-card align-self-center align-items-center">
                          <form className="col-md-10 d-flex p-4 flex-column justify-content-center align-items-center text-center ">
                              <input className="form-control p-3 m-4" placeholder="Enter Your Email" />
                              <button className="col-md-5 btn btn-light"
                              onClick={handleContinue}
                              >Continue</button>
                              <div className="by-joining m-4">By joining I agree to receive emails from Surpreedz</div>
                              
                              <div className="col-md-12" style={{border: "1px solid #000000"}}></div>
                              <div className="col-md-12 p-3 d-flex flex-row justify-content-center">
                                  <div className="already"> Already a member ?</div>
                                  <div onClick={()=> {navigate('/sign-in')}}
                                  className="sign-in btn-link"> Sign In</div>
                              </div>
                          </form> 
                      </div>
                  </div>
                  <br/>
                  <br/>
                  <br/>
    
              </div>
        </div>
      );
      case 2:
        return (
          <div className="bg-request-page">
          <div className="container">
            <br/>
            <br/>
            <br/>
              <div className="col-md-12 d-flex align-items-center flex-row justify-content-around">
                  <div className="col-md-4 align-self-center">
                      <div className="welcometext m-2">Welcome to Surpreedz</div>
                      <div className="col-md-6 hr m-2"></div>
                      <div className="liberate m-2">Sign up to liberate out expressions</div>
                  </div>

                  <div className="col-md-4 card bg-card align-self-center align-items-center">
                      <form className="col-md-10 d-flex p-4 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2" placeholder="Choose a Username" />
                          <input className="form-control p-3 m-2" placeholder="Choose a Password" />

                          <div className="col-md-12 d-flex flex-row justify-content-around m-3">
                          <button className="col-md-5 btn btn-light"
                          onClick={handleBack}
                          >Back</button>

                          <div className="col-md-2"></div>

                          <button className="col-md-5 btn btn-light"
                          >Join</button>

                          </div>
                          
                          <div className="by-joining m-2">By joining, you agree to Surpreedz's Terms of Service, as well as to receive occasional emails from us</div>
                          
                          <div className="col-md-12" style={{border: "1px solid #000000"}}></div>
                          <div className="col-md-12 p-3 d-flex flex-row justify-content-center">
                              <div className="already"> Already a member ?</div>
                              <div
                              onClick={()=> {navigate('/sign-in')}}
                              className="sign-in btn-link"> Sign In</div>
                          </div>
                      </form> 
                  </div>
              </div>
              <br/>
              <br/>
              <br/>

          </div>
    </div>
        );
      default:
         break;
  }
}

export default SignUpView;
