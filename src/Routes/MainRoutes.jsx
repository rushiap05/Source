import {Routes, Route} from "react-router-dom"
import { About } from "../components/About"
import { Home } from "../components/Home"
import { Navbar } from "../components/Navbar"
import { SingleProductList } from "../components/SingleProduct"



export const MainRoutes = ()=>{
    return(
        <>
        <Navbar/>
          <div className="App">
            <Routes>
              <Route exact path='/' element={<About/>} />
              <Route path='/home' element={<Home/>} />
              <Route path="/singleproduct" element={<SingleProductList/>} />
            </Routes>
          </div>
        </>
    )
}