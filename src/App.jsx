import About from "./pages/About"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import Defaultlayout from "./layouts/Defaultlayout"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductSingle from "./pages/ProductSingle"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout></Defaultlayout>}>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/productSingle" element={<ProductSingle></ProductSingle>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
