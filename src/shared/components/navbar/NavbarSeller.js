import "./navbar.css"
import logo from "./SurpreedzLogo.png"

const NavbarSeller = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container-fluid">
        <div className="navbar-brand pt-0">
            <img  src={logo} alt='surpreedz' height={'24'}></img>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/category">Category</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="/seller" >Seller</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="/buyer" >Buyer</a>
                    </li>
                </ul>
               
                    <ul className="navbar-nav mb-2 mb-lg-0" >

                        <li className="nav-item">
                        <a className="nav-link" href="/seller-orders">Orders</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/seller-service">Service</a>
                        </li>
                    </ul>
                
                <ul className="navbar-nav mb-2 mb-lg-0">

                    <li className="nav-item">
                    <a className="nav-link" href="/">Profile</a>
                    </li>

                    <button className="btn btn-outline-light" type="submit">Sign Out</button>
                </ul>
                
                    
                    
        </div>
    </div>
  
</nav>
  )
}

export default NavbarSeller
