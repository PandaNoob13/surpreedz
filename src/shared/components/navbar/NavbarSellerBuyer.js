import "./navbar.css";
import logo from "./SurpreedzLogo.png"
import {BsCart} from "react-icons/bs";
import {FaRegListAlt} from "react-icons/fa";



function NavbarSellerBuyer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <div className="navbar-brand pt-0 ms-3">
                <img  src={logo} alt='surpreedz' height={'24'}></img>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/category">Category</a>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Seller
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Request List</a></li>
                            <li><a className="dropdown-item" href="/">Service</a></li>
                        </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buyer
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Purchase List</a></li>
                            <li><a className="dropdown-item" href="/">Become a Seller</a></li>
                        </ul>
                        </li>

                    </ul>

                    
                        <ul className="navbar-nav mb-2 mb-lg-0 me-3" >

                            <li className="nav-item">
                            <a className="nav-link position-relative" title="Cart" href="/">
                              <BsCart style={{fontSize:'20px'}}/>
                              <span className="position-absolute top-3 translate-middle badge rounded-pill text-bg-light">2
                                  {/* <span className="visually-hidden">unread messages</span> */}
                              </span>
                            </a>
                            </li>
                        </ul>
                    

                   
                        <ul className="navbar-nav mb-2 mb-lg-0 me-3" >

                            <li className="nav-item">
                            <a className="nav-link position-relative" title="Orders" href="/">
                              <FaRegListAlt style={{fontSize:'20px'}}/>
                              <span className="position-absolute top-3 translate-middle badge rounded-pill text-bg-light">0
                                  {/* <span className="visually-hidden">unread messages</span> */}
                              </span>
                            </a>
                            </li>
                        </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0 me-3">


                        {/* <button className="btn btn-outline-light" type="submit">Sign Out</button> */}

                        <li className="nav-item dropdown me-2">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="rounded-circle" style={{width:'40px',height:'40px'}} src="https://media.kompas.tv/library/image/content_article/article_img/20220219044109.jpg" alt="" />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <div className="dropdown-divider"></div>
                            <li><button className="btn btn-outline-dark" type="submit">Sign Out</button></li>
                        </ul>
                        </li>
                    </ul>
                    
                        
                        
            </div>
        </div>
      
    </nav>
  );
}

export default NavbarSellerBuyer;