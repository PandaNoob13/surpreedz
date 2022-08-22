import { useNavigate } from "react-router-dom";
import "./signInView.css"

const SignInView = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('userCred','grup4')
        localStorage.setItem('token','token-grup4')
        navigate("/#category")
        alert(`Login success`)
    }

return (
          <div className="bg-request-page" >
          <div className="container">
              <div className="col-md-12 d-flex flex-row justify-content-center align-items-center">
                  <div className="col-md-4 align-self-center">
                      <div className="welcometext m-2">Welcome Back !</div>
                      <div className="col-md-6 hr m-2"></div>
                      <div className="liberate m-2">Sign in to liberate our expression</div>
                  </div>

                  <div className="col-md-4"></div>

                  <div className="col-md-4 card align-items-center align-self-center" style={{backgroundColor:'#373535', borderRadius:'8px'}}>

                      <form className="col-md-10 d-flex p-4 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2" placeholder="Username/email" />
                          <input className="form-control p-3 m-2" placeholder="Password" />
                          <button onClick={handleLogin} className="col-md-10 btn btn-light"
                          >Continue</button>
                          <div className="col-md-12 d-flex m-3 flex-row justify-content-around">
                                <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="check-remmeber-me" />
                                        <label className="already" htmlFor="check-remmeber-me">
                                            Remember me
                                        </label>
                                </div>
                                <div className="sign-in btn-link">
                                Forget Password?
                                </div>
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
    </div>
);
}

export default SignInView;
