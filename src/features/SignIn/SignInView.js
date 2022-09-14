import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../shared/components/Loading/Loading";
import "./signInView.css"
import useSignIn from "./useSignIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const SignInView = () => {
    const navigate = useNavigate();
    const {onPostSignIn, isLoading} = useSignIn();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [passwordType, setPasswordType] = useState('password')
    const [eye, setEye] = useState(true);
    const location = useLocation();
    const dataOrder = location.state

   

    const handleEmailChange = async (event) => {
        setEmail(event.target.value)
        // console.log('dataOrder => ', dataOrder);
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
    }

    const validatePasswordInput = async () => {
        let minPasswordLength = 3
        let passwordErrorMessage = ''
        if (password.length < minPasswordLength){
            passwordErrorMessage = `${minPasswordLength} min length character`
        }
        setPasswordErrorMessage(passwordErrorMessage)
    }
    useEffect(()=>{
        validatePasswordInput()
    }, [password])

    const handleSubmit = async (event) => {
        event.preventDefault(); // Supaya ga render ulang
        onPostSignIn(email, password)
    }

    useEffect(() => {
        checkInputState()
    }, [emailErrorMessage])

   
    useEffect(() => {
        checkInputState()
    }, [passwordErrorMessage])
    const checkInputState = async () => {
        if (emailErrorMessage === '' && passwordErrorMessage === ''){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

<<<<<<< Updated upstream
return (
          <div className="bg-request-page">
          <div className="container d-flex flex-column min-vh-100 py-auto">
                  <div className="row my-auto">
                      <div className="col-md-8 my-auto px-2 py-4">
                      <div className="welcometext m-2">Welcome Back !</div>
                      <div className="col-md-6 hr m-2"></div>
                      <div className="liberate m-2">Sign in to liberate our expression</div>
                  </div>
                  <div  className="col-lg-4 card bg-card align-self-center align-items-center">
                      <form onSubmit={handleSubmit} className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2"
                            placeholder="Email"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleEmailChange}
                          />
                          <input className="form-control p-3 m-2" placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handlePasswordChange} />
<<<<<<< Updated upstream
=======
=======
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

    return (
        <div className="bg-request-page">
            <div className="container d-flex flex-column min-vh-100 py-auto">
                <div className="row my-auto">
                    <div className="col-md-8 my-auto px-2 py-4">
                        <div className="welcometext m-2">Welcome Back !</div>
                        <div className="col-md-6 hr m-2"></div>
                        <div className="liberate m-2">Sign in to liberate our expression</div>
                    </div>
                    <div className="col-lg-4 shadow-lg card bg-card align-self-center align-items-center">
                        <form onSubmit={handleSubmit} className="col-md-10 gap-3 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                            <input className="form-control p-3"
                                placeholder="Username/email"
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleEmailChange}
                            />
                            <div className="input-text col-md-12">
                                <input className={`form-control p-3`} placeholder="Password"
                                    type={passwordType}
                                    name="password"
                                    id="password"
                                    onChange={handlePasswordChange} />
                                {eye ? <FontAwesomeIcon className='fa-2x eye' icon={solid("eye")} onClick={Eye} /> : <FontAwesomeIcon className='fa-2x eye-slash' icon={solid("eye-slash")} onClick={Eye} />}
                            </div>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
                            <button
                                type="submit"
                                name="submit" 
                                id="submit"  
                                className="btn btn-light col-md-12"
                                disabled={buttonDisabled}>Continue</button>
                                                        
                            <div className="col-md-12 d-flex m-3 flex-row justify-content-around">
                                {/* <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check-remmeber-me" />
                                        <label className="already" htmlFor="check-remmeber-me">
                                            Remember me
                                        </label>
                                </div>
                                <div className="sign-in btn-link">
                                Forget Password?
                                </div> */}
                            </div>
                                    
                            <div className="col-md-12" style={{border: "1px solid #000000"}}></div>
                            <div className="col-md-12 pb-3 d-flex flex-row justify-content-center">
                                <div className="already"> Not a member yet ?</div>
                                <div onClick={()=> {navigate('/sign-up')}} className="sign-in btn-link">
                                    Sign Up
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
            {isLoading ? <Loading/> : <></>}
        </div>
    );
}

export default SignInView;
