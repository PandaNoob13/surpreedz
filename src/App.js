import './App.css';
import NavbarLogin from './shared/components/navbar/NavbarLogin';
import NavbarSellerBuyer from './shared/components/navbar/NavbarSellerBuyer';

function App() {
  return (
    <div className="App">
      Navbar login
     <NavbarLogin/>
     <br/>
     <NavbarSellerBuyer/>
    </div>
  );
}

export default App;
