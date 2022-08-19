import './App.css';
import NavbarLogin from './shared/components/navbar/NavbarLogin';
import NavbarSellerBuyer from './shared/components/navbar/NavbarSellerBuyer';
import NavbarSeller from './shared/components/navbar/NavbarSeller';
import NavbarBuyer from './shared/components/navbar/NavbarBuyer';

function App() {
  return (
    <div className="App">
      {/* Navbar login
     <NavbarLogin/> */}
     <br/>
     <NavbarSellerBuyer/>
     <br/>
     {/* Navbar seller
     <NavbarSeller/> */}
     <br/>
     {/* Navbar buyer
     <NavbarBuyer/> */}
     <br/>
    </div>
    
  );
}

export default App;
