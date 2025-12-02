import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider"
function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}

export default App;
