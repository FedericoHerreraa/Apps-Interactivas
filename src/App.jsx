
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import './App.css';
import { BackToTop } from './components/BackToTop';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/plato/:id" element={<ProductDetail />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  )
}

export default App;
