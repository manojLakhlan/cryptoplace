
import Navbar from '../Components/Navbar'
import Home from '../pages/Home/Home'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Coin from '../pages/Coin/Coin'
import Footer from '../Components/Footer/Footer'

function App() {

  return (
   <div className='app'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/coin/:coinId' element={<Coin/>}></Route>

    </Routes>
    <Footer></Footer>
   </div>
  )
}

export default App
