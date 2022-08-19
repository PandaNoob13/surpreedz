
import logo from "./SurpreedzLogo.png"
import {BsCart, BsJournalText} from "react-icons/bs";


function NavbarSellerBuyer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <div className="navbar-brand pt-0">
                <img  src={logo} alt='surpreedz' height={'24'}></img>
            </div>
        
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
             style={{}}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabIndex={-1} aria-disabled="true">Link</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

            </div> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
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

                    
                        <ul className="navbar-nav mb-2 mb-lg-0" >

                            <li className="nav-item">
                            <a className="nav-link" href="/"><BsCart/></a>
                            </li>
                        </ul>
                    

                   
                        <ul className="navbar-nav mb-2 mb-lg-0" >

                            <li className="nav-item">
                            <a className="nav-link " href="/"><BsJournalText/></a>
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
  );
}

export default NavbarSellerBuyer;