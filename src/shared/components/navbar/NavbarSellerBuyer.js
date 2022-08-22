import "./navbar.css";
import logo from "./SurpreedzLogo.png"

function NavbarSellerBuyer() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
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
                        <a className="nav-link" aria-current="page" href="/category">Category</a>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0" >
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-target=".navbar-collapse.show" aria-expanded="false">
                        Seller
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Request List</a></li>
                            <li><a className="dropdown-item" href="/">Service</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buyer
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Purchase List</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item dropdown me-2">
                        <a className="nav-link dropdown-toggle py-0" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="rounded-circle" style={{width:'1.5rem',height:'1.5rem'}} src="https://media.kompas.tv/library/image/content_article/article_img/20220219044109.jpg" alt="" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                            <li><span className="dropdown-item text-dropdown">Signed in as <b>conan_kun</b></span></li>
                            <div className="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <div className="dropdown-divider"></div>
                            <li><a className="dropdown-item" href="/">Sign Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      
    </nav>
  );
}

export default NavbarSellerBuyer;