import { Routes,Route} from "react-router-dom"
import Home from "./componets/pages/Home"
import About from "./componets/pages/About"
import Contact from "./componets/pages/Contact"
import Navbar from "./componets/navbar/Navbar"
import User from "./componets/pages/User"
import PageNotFound from "./componets/pages/PageNotFound"
import Products from "./componets/pages/Products"
import Phone from "./componets/pages/Phone"
import Laptop from "./componets/pages/Laptop"
function App() {
  return (
    <div>
      <Navbar/>
      <h2>React Router Example</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/products" element={<Products/>}>
              <Route path="laptop" element={<Laptop/>}/>
              <Route path="phone" element={<Phone/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App