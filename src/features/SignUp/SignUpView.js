import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import EditAccount from "../../shared/components/EditProfileCard/EditAccount";
import Loading from "../../shared/components/Loading/Loading";
import "./signUpView.css"
import useSignUp from "./useSignUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const SignUpView = () => {
    const {onPostSignUp, isLoading} = useSignUp();
    const [step,setStep]= useState(1);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [passwordType, setPasswordType] = useState('password')
    const [eye, setEye] = useState(true);
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
        if (step === 1){
        if (emailErrorMessage === '' && passwordErrorMessage === ''){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
        } else {
        if (nameErrorMessage === '' && location.length > 3){
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

    const Eye = async (event) => {
        event.preventDefault(); // Supaya ga render ulang
        if(passwordType === "password"){
            setPasswordType('text');
            setEye(false);
        }
        else{
            setPasswordType('password');
            setEye(true);
        }
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

                        <div className="col-lg-4 shadow-lg card bg-card align-self-center align-items-center">
                            <form className="col-md-10 gap-3 d-flex pt-5 flex-column justify-content-center align-items-center text-center">
                                <input className="form-control p-3" type="email" placeholder="Enter Your Email" value={email} onChange={handleEmailChange}/>
                                <div className="input-text col-md-12">
                                    <input className={`form-control p-3`} placeholder="Choose a Password"
                                        type={passwordType}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={handlePasswordChange} />
                                    {eye ? <FontAwesomeIcon className='fa-2x eye' icon={solid("eye")} onClick={Eye} /> : <FontAwesomeIcon className='fa-2x eye-slash' icon={solid("eye-slash")} onClick={Eye} />}
                                </div>
                                <button disabled={buttonDisabled} className="col-md-12 btn btn-light" onClick={handleContinue}>Continue</button>
                                <div className="by-joining m-2">By joining I agree to all policies from Surpreedz</div>                              
                                <div className="col-12" style={{border: "1px solid #000000"}}></div>
                                <div className="col-md-12 pb-3 d-flex flex-row justify-content-center">
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
                        <div className="col-lg-4 shadow-lg card bg-card align-self-center align-items-center ">
                            <form className="col-md-10 gap-3 d-flex pt-5 flex-column justify-content-center align-items-center text-center">
                                <input className="form-control p-3" type="text" placeholder="Enter your name" value={name} onChange={handleNameChange}/>
                                <input className="form-control p-3" type="text" placeholder="Enter your location" value={location} onChange={handleLocationChange}/>
                                <div className="container px-0 justify-content-between row gap-2">
                                    <button className="col-md-5 btn btn-light"
                                    onClick={handleBack}
                                    >Back</button>
                                    <button disabled={buttonDisabled} className="col-md-5 btn btn-light" onClick={handleSubmit}
                                    >Join</button>
                                </div>
                                <div className="by-joining m-2">By joining I agree to all policies from Surpreedz</div>                              
                                <div className="col-12" style={{border: "1px solid #000000"}}></div>
                                <div className="col-md-12 pb-3 d-flex flex-row justify-content-center">
                                    <div className="already">Already a member?</div>
                                    <NavLink to='/sign-in' className="sign-in btn-link">Sign In</NavLink>
                                </div>
                            </form> 
                        </div>
                    </div>
                    {isLoading ? <Loading/> : <></>}
                </div>
            </div>
        );
    default:
        break;
    }
}

export default SignUpView;
