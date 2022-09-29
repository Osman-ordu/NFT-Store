import { Route, Routes } from 'react-router-dom'
import EntranceArea from "./components/home/entranceArea";
import Home from "./components/home/homePage";
import Product from "./components/card/product";
import About from './components/about/about';
import Contact from './components/contact/contact';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<EntranceArea />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App