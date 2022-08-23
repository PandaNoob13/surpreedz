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
          <div className="bg-request-page">
          <div className="container d-flex flex-column min-vh-100 py-auto">
                  <div className="row my-auto">
                      <div className="col-md-8 my-auto px-2 py-4">
                      <div className="welcometext m-2">Welcome Back !</div>
                      <div className="col-md-6 hr m-2"></div>
                      <div className="liberate m-2">Sign in to liberate our expression</div>
                  </div>
                  <div className="col-lg-4 card bg-card align-self-center align-items-center">
                          <form className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2" placeholder="Username/email" />
                          <input className="form-control p-3 m-2" placeholder="Password" />
                          <button onClick={handleLogin} className="col-md-10 btn btn-light m-4"
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
