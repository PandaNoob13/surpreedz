import { useState } from "react"
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
      return (
        <div className="col-md-12 signupcontainer">
              <div className="col-md-4 textsignup">
                  <div className="welcometext">
                        Welcome to Surpreedz
                  </div>
                  <div className="line">
                  </div>
                  <div className="signexpression">
                        Sign up to liberate our expression
                  </div>
              </div>
    
             
                    <div className= "signupcard">
                    <div >
                          <input className="input-box" style={{marginTop:"50px"}} placeholder="Enter your email"/>
                    </div>
                    <div>
                          <button className="button-continue" onClick={handleContinue}>Continue</button>
                    </div>
      
                    <div className="by-joining">                    
                      By joining I agree t receive emails from Surpreedz
                    </div>
      
                    <div>
                      <hr className="line-2"></hr>
                    </div>
                    <div className="signin">
                        <div style={{color:'#d9d9d9', fontWeight:'100'}}>Already a member ? </div>
                        <div style={{color:'#ffffff', fontWeight:'bold' ,marginLeft:'5px'}}>Sign in </div>
                    </div>
                </div>
        </div>
      );
    case 2:
      return (
        <div className="col-md-12 signupcontainer">
              <div className="col-md-4 textsignup">
                  <div className="welcometext">
                        Welcome to Surpreedz
                  </div>
                  <div className="line">
                  </div>
                  <div className="signexpression">
                        Sign up to liberate our expression
                  </div>
              </div>
            
              <div className= "signupcard">
                  <div >
                        <input className="input-box" style={{marginTop:"30px"}} placeholder="Choose a Username"/>
                  </div>
                  <div>
                        <input className="input-box" placeholder="Choose a Password"/>
                  </div>
                  <div style={{display:'flex'}}>
                        <button className="button-back" onClick={handleBack}>Back</button>
                        <button className="button-join">Join</button>
                  </div>
    
                  <div className="by-joining">                    
                    By joining, you agree to Surpreedz's Terms of Service, as well as to receive occasional emails from us.
                  </div>
    
                  <div>
                    <hr className="line-2"></hr>
                  </div>
                  <div className="signin">
                      <div style={{color:'#d9d9d9', fontWeight:'100'}}>Already a member ? </div>
                      <div style={{color:'#ffffff', fontWeight:'bold', marginLeft:'5px'}}>Sign in </div>
                  </div>
              </div>
    
    
        </div>
      );
  
    default:
      break;
  }

 
}

export default SignUpView;
