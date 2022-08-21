import './App.css';
import NavbarLogin from './shared/components/navbar/NavbarLogin';
import NavbarSeller from './shared/components/navbar/NavbarSeller';
import NavbarBuyer from './shared/components/navbar/NavbarBuyer';
import NavbarSellerBuyer from './shared/components/navbar/NavbarSellerBuyer';

function App() {
  return (
    <div className="App">
      {/* Navbar login
     <NavbarLogin/>
     
     <br/>
     Navbar seller
     <NavbarSeller/>
     <br/>
     Navbar buyer
     <NavbarBuyer/>
     <br/> */}

     <NavbarSellerBuyer/>
    </div>
    
  );
}

export default App;
