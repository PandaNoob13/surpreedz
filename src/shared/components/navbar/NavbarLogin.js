import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./SurpreedzLogo.png"

function NavbarLogin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <div className="navbar-brand pt-0 ms-3">
                <img src={logo} alt='surpreedz' height={'24'}></img>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link" aria-current="page">Category</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <NavLink to='/sign-in' className="nav-link" aria-current="page">Sign In</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0 mx-1">
                    <NavLink to='/sign-up'>
                    <button className="btn btn-outline-light" type="submit">Sign Up</button>
                    </NavLink>
                </ul>
            </div>
        </div>
      
    </nav>
  );
}

export default NavbarLogin;