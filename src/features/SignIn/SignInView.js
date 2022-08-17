import "./signInView.css"

const SignInView = () => {
  return (
    <div className="col-md-12 signincontainer">
          <div className="col-md-3 textsignin">
              <div className="welcometext">
                    Welcome Back !
              </div>
              <div className="line">
              </div>
              <div className="signexpression">
                    Sign in to liberate our expression
              </div>
          </div>

          <div className= "signincard">
              <div >
                    <input className="input-box" style={{marginTop:"30px"}} placeholder="Username/email"/>
              </div>
              <div>
                    <input className="input-box" placeholder="Password"/>
              </div>
              <div>
                    <button className="button-continue">Continue</button>
              </div>

              <div className="remember-password">
                  <div style={{display:'flex'}}>
                      <input className="checkbox" type="checkbox" />
                     
                      <label className="label-remember">Remember me</label>
                  </div>
                  <div className="forget-password">
                        Forget Password?
                  </div>
              </div>

              <div>
                <hr className="line-2"></hr>
              </div>
              <div className="signup">
                  <div style={{color:'#d9d9d9', fontWeight:'100'}}>Not a member yet ? </div>
                  <div style={{color:'#ffffff', fontWeight:'bold' ,marginLeft:'5px'}}>Sign up </div>
              </div>
          </div>
          
    </div>
  )
}

export default SignInView;
