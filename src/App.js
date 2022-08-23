import AppRouter from "./navigation/AppRouter";
import { AuthProvider } from "./shared/auth/UseAuth";

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
