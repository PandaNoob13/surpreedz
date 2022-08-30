import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import EditAccount from "../../shared/components/EditProfileCard/EditAccount";
import "./signUpView.css"
import useSignUp from "./useSignUp";

const SignUpView = () => {
    const {onPostSignUp} = useSignUp();
    const [step,setStep]= useState(1);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [nameErrorMessage, setNameErrorMessage] = useState('')

    const handleEmailChange = async (event) => {
        setEmail(event.target.value)
        console.log(event.target.value);
    }

    const validateEmailInput = async () => {
        let emailErrorMessage = ''
        if (!email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
            if (email === 0 || email === '') {
                emailErrorMessage = `Email can't be empty!`
            } else {
                emailErrorMessage = 'Invalid email format'
            }
        }
        setEmailErrorMessage(emailErrorMessage)
    }

    useEffect(() => {
        validateEmailInput()
    }, [email])

    const handlePasswordChange = async (event) => {
        setPassword(event.target.value)
        console.log(event.target.value);

    }

    const validatePasswordInput = async () => {
        let minPasswordLength = 6
        let passwordErrorMessage = ''
        if (password.length < minPasswordLength){
            passwordErrorMessage = `${minPasswordLength} min length character`
        }
        setPasswordErrorMessage(passwordErrorMessage)
    }

    useEffect(()=>{
      validatePasswordInput()
    }, [password])

    const handleNameChange = async (event) => {
      setName(event.target.value)
      console.log(event.target.value);

    }

    const validateNameInput = async () => {
      let minNameLength = 3
        let nameErrorMessage = ''
        if (name.length < minNameLength){
            nameErrorMessage = `${minNameLength} min length character`
        }
        setNameErrorMessage(nameErrorMessage)
    }

    useEffect(() => {
      validateNameInput()
    }, [name])

    const handleLocationChange = async (event) => {
      setLocation(event.target.value)
    }

    const handleSubmit = async (event) => {
      event.preventDefault(); // Supaya ga render ulang
      console.log(email, password, name, location);
      onPostSignUp(email, password, name, location)
      
    }

    const checkInputState = async () => {
      if (step == 1){
        if (emailErrorMessage === '' && passwordErrorMessage === ''){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
      } else {
        if (nameErrorMessage === '' && location.length > 4){
          setButtonDisabled(false)
        } else {
          setButtonDisabled(true)
        }
      }
      
    }

    useEffect(() => {
        checkInputState()
    }, [emailErrorMessage])

   
    useEffect(() => {
        checkInputState()
    }, [passwordErrorMessage])
  
    useEffect(() => {
        checkInputState()
    }, [nameErrorMessage, location, step])

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
                              <input className="form-control p-3 m-2" type="email" placeholder="Enter Your Email" value={email} onChange={handleEmailChange}/>
                              <input className="form-control p-3 m-2" type="password" placeholder="Choose a Password" value={password} onChange={handlePasswordChange}/>
                              <button disabled={buttonDisabled} className="col-6 btn btn-light m-4"
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
                          <input className="form-control p-3 m-2" type="text" placeholder="Enter your name" value={name} onChange={handleNameChange}/>
                          <input className="form-control p-3 m-2" type="text" placeholder="Enter your location" value={location} onChange={handleLocationChange}/>


                          <div className="container justify-content-around row m-2">
                            <button className="col-md-5 btn btn-light m-2"
                            onClick={handleBack}
                            >Back</button>
                            <button disabled={buttonDisabled} className="col-md-5 btn btn-light m-2" onClick={handleSubmit}
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
