import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBookingDetails } from '../../store/slices/servicesSlice';
import Button from '../../components/common/Button';
import './BookingPage.css';

const BookingPage = () => {
  const dispatch = useDispatch();
  const { selectedService } = useSelector((state) => state.services);

  const handleBooking = (details) => {
    dispatch(setBookingDetails(details));
    // Additional booking logic here
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        {selectedService ? (
          <div className="booking-details">
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <p className="price">Price: {selectedService.price}</p>
            <div className="booking-actions">
              <Button onClick={() => handleBooking(selectedService)}>
                Confirm Booking
              </Button>
            </div>
          </div>
        ) : (
          <p>Please select a service to book</p>
        )}
      </div>
    </div>
  );
};

export default BookingPage; 