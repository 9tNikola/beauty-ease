import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesMenu from '../components/ServicesMenu';
import { Navigate } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<ServicesMenu />} />
        <Route path="/" element={<Navigate to="/services" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 