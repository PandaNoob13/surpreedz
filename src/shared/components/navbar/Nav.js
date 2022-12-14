import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/UseAuth";
import "./navbar.css";
import logo from "./SurpreedzLogo.png"

const Nav = () => {
    const {token,onLogout} = useAuth()
    const navigate = useNavigate();
    const account_name = window.localStorage.getItem('account_name')
    const photo_profile = window.localStorage.getItem('photo_profile')
    if (!token){
        window.localStorage.clear();
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <div className="container">
                <div className="navbar-brand pt-0 ms-3">
                    <NavLink to='/' className="nav-link" aria-current="page"><img src={logo} alt='surpreedz' height={'24'}></img></NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                        {/* <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-current="page">Category</NavLink>
                        </li> */}
                    </ul>

                { token ?
                    <ul className="navbar-nav mb-2 mb-lg-0" >
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-target=".navbar-collapse.show" aria-expanded="false">
                            Seller
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                <li><NavLink to="/request-list" className="dropdown-item">Request List</NavLink></li>
                                <li><NavLink to="/service"  className="dropdown-item">Service</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buyer
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                <li><NavLink to="/purchase-list" className="dropdown-item">Purchase List</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-2">
                            <div className="nav-link dropdown-toggle py-0"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop: "0.5rem"}}>
                                <img className="rounded-circle" style={{width:'1.5rem',height:'1.5rem', objectFit: "cover"}} src={`data:image/jpg;base64,${photo_profile}`} alt="" />
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                <li><span className="dropdown-item text-dropdown">Signed in as <b>{account_name}</b></span></li>
                                <div className="dropdown-divider"></div>
                                <NavLink to="/profile" className="dropdown-item" >Profile</NavLink>
                                <div className="dropdown-divider"></div>
                                <button  className="dropdown-item" onClick={onLogout}>Sign Out</button>
                            </ul>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <NavLink to='/sign-in' className="nav-link" aria-current="page">Sign In</NavLink>
                        </li>

                        <NavLink to='/sign-up'>
                        <button className="btn btn-outline-light" type="submit">Sign Up</button>
                        </NavLink>
                    </ul>
                    
            }

                    
                </div>
            </div>
        
        </nav>
    )
}

export default Nav
