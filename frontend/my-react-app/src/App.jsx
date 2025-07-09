import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlaceOrder from './pages/Customer/PlaceOrder';
import Dashboard from './pages/Owner/Dashboard';
import OrderStatus from './pages/Customer/OrderStatus';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/customer/place-order" element={<PlaceOrder />} />
        <Route path="/owner/dashboard" element={<Dashboard />} />
        <Route path="/customer/order-status" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
