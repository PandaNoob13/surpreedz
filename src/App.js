import AppRouter from "./navigation/AppRouter";
import { AuthProvider } from "./shared/auth/UseAuth";
import "./App.css"

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider> 
    </>
  )
}

export default App;
