import About from "./pages/About"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
