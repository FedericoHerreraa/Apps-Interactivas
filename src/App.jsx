
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/plato/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
