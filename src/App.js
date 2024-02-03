import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import MyCart from './pages/MyCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </Router>
  );
}

export default App;
