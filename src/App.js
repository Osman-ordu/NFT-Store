import { Route, Routes } from 'react-router-dom'
import EntranceArea from "./components/home/entranceArea";
import Home from "./components/home/homePage";
import Product from "./components/card/product";
import Header from "./components/header/navbar";
import About from './components/about/about';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<EntranceArea />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App