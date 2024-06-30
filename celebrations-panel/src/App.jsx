import { AuthProvider,  } from "./contexts/auth"
import { PageRoutes } from "./routes"


function App() {
  return (
    <AuthProvider>
        <PageRoutes />
    </AuthProvider>
    
  )
}

export default App
