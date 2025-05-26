import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesMenu from '../components/ServicesMenu';
import { Navigate } from 'react-router-dom';
import AboutPage from '../pages/About/About';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home/Home';
import Footer from '../components/Footer';
import ContactPage from '../pages/Contact/Contact';
import BookingPage from '../pages/Booking/BookingPage';
const AppRoutes = () => {
  return (
    <Router>
<Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/services" element={<ServicesMenu />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes; 