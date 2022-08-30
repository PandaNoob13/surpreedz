import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../shared/components/Loading/Loading";
import "./signInView.css"
import useSignIn from "./useSignIn";

const SignInView = () => {
    const navigate = useNavigate();
    const {onPostSignIn, isLoading} = useSignIn();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const location = useLocation();
    const dataOrder = location.state

    const handleEmailChange = async (event) => {
        setEmail(event.target.value)
        console.log('dataOrder => ', dataOrder);
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
        if (dataOrder) {
            localStorage.setItem('order_detail_serviceDetailId',dataOrder.serviceDetailId)
            localStorage.setItem('order_detail_dueDate',dataOrder.dueDate)
            localStorage.setItem('order_detail_occasion',dataOrder.occasion)
            localStorage.setItem('order_detail_message',dataOrder.message)
            localStorage.setItem('order_detail_description',dataOrder.description)
            localStorage.setItem('order_detail_price',dataOrder.price)
            localStorage.setItem('order_detail_recipient',dataOrder.recipient)
        }
    }, [email])

    const handlePasswordChange = async (event) => {
        setPassword(event.target.value)
        // localStorage.setItem('occasion', dataOrder.occasion)
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
                            placeholder="Username/email"
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
                        
                          {/* {
                            dataOrder? <NavLink className="col-md-10"  to="/purchase-confirmation"
                            state={
                                {
                                    buyerId: parseInt(window.localStorage.getItem('account_id')),
                                    serviceDetailId: dataOrder.serviceDetailId,
                                    dueDate: dataOrder.dueDate,
                                    occasion: dataOrder.occasion,
                                    recipient: dataOrder.recipient,
                                    message: dataOrder.message,
                                    description: dataOrder.description,
                                    price: dataOrder.price
                                }}
                                onClick={handleSubmit}
                                
                                >
                                    <button
                                    type="submit"
                                    name="submit" 
                                    id="submit"  
                                    className="col-md-12 btn btn-light"
                                    disabled={buttonDisabled}
                                    
                                    >Continue</button>
                            </NavLink>
                            :
                            <NavLink className="col-md-10"  to="/" onClick={handleSubmit}>
                                <button
                                    type="submit"
                                    name="submit" 
                                    id="submit"  
                                    className="col-md-12 btn btn-light"
                                    disabled={buttonDisabled}
                                    >Continue</button>
                          </NavLink>
                          } */}

                            <button
                                    type="submit"
                                    name="submit" 
                                    id="submit"  
                                    className="col-md-10 btn btn-light"
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
                          <div className="col-md-12 p-3 d-flex flex-row justify-content-center">
                              <div className="already"> Not a member yet ?</div>
                              <div onClick={()=> {navigate('/sign-up')}}
                              className="sign-in btn-link">
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
