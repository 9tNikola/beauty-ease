import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, Check } from 'lucide-react';
import './BookingPage.css';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    { id: 'facial', name: 'Classic Facial', duration: '60 min', price: '$85' },
    { id: 'massage', name: 'Relaxation Massage', duration: '90 min', price: '$120' },
    { id: 'manicure', name: 'Gel Manicure', duration: '45 min', price: '$55' },
    { id: 'pedicure', name: 'Spa Pedicure', duration: '60 min', price: '$65' },
    { id: 'eyebrows', name: 'Eyebrow Shaping', duration: '30 min', price: '$40' },
    { id: 'waxing', name: 'Full Leg Wax', duration: '45 min', price: '$75' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData);
    alert('Booking confirmed! We\'ll send you a confirmation email shortly.');
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return bookingData.service !== '';
      case 2:
        return bookingData.date !== '' && bookingData.time !== '';
      case 3:
        return bookingData.firstName !== '' && bookingData.lastName !== '' && 
               bookingData.email !== '' && bookingData.phone !== '';
      default:
        return false;
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book Your Appointment</h1>
        <p>Experience luxury and relaxation at Beauty Ease</p>
      </div>

      <div className="progress-bar">
        <div className="progress-steps">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`progress-step ${
                currentStep >= step ? 'active' : ''
              } ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="step-circle">
                {currentStep > step ? <Check size={16} /> : step}
              </div>
              <span className="step-label">
                {step === 1 && 'Service'}
                {step === 2 && 'Date & Time'}
                {step === 3 && 'Details'}
                {step === 4 && 'Confirm'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-content">
        {currentStep === 1 && (
          <div className="step-content">
            <h2>Choose Your Service</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-card ${
                    bookingData.service === service.id ? 'selected' : ''
                  }`}
                  onClick={() => handleInputChange('service', service.id)}
                >
                  <h3>{service.name}</h3>
                  <div className="service-details">
                    <span className="duration">
                      <Clock size={16} />
                      {service.duration}
                    </span>
                    <span className="price">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="step-content">
            <h2>Select Date & Time</h2>
            <div className="datetime-section">
              <div className="date-picker">
                <label>
                  <Calendar size={20} />
                  Choose Date
                </label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="time-picker">
                <label>
                  <Clock size={20} />
                  Available Times
                </label>
                <div className="time-slots">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`time-slot ${
                        bookingData.time === time ? 'selected' : ''
                      }`}
                      onClick={() => handleInputChange('time', time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step-content">
            <h2>Your Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  <User size={20} />
                  First Name *
                </label>
                <input
                  type="text"
                  value={bookingData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label>
                  <User size={20} />
                  Last Name *
                </label>
                <input
                  type="text"
                  value={bookingData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label>
                  <Mail size={20} />
                  Email *
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label>
                  <Phone size={20} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="form-group full-width">
                <label>Special Requests or Notes</label>
                <textarea
                  value={bookingData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any allergies, preferences, or special requests..."
                  rows="4"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="step-content">
            <h2>Confirm Your Booking</h2>
            <div className="confirmation-details">
              <div className="booking-summary">
                <h3>Appointment Summary</h3>
                <div className="summary-item">
                  <span className="label">Service:</span>
                  <span className="value">
                    {services.find(s => s.id === bookingData.service)?.name}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="label">Date:</span>
                  <span className="value">
                    {new Date(bookingData.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="label">Time:</span>
                  <span className="value">{bookingData.time}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Duration:</span>
                  <span className="value">
                    {services.find(s => s.id === bookingData.service)?.duration}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="label">Price:</span>
                  <span className="value price">
                    {services.find(s => s.id === bookingData.service)?.price}
                  </span>
                </div>
              </div>

              <div className="client-info">
                <h3>Client Information</h3>
                <div className="info-item">
                  <User size={16} />
                  <span>{bookingData.firstName} {bookingData.lastName}</span>
                </div>
                <div className="info-item">
                  <Mail size={16} />
                  <span>{bookingData.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={16} />
                  <span>{bookingData.phone}</span>
                </div>
                {bookingData.notes && (
                  <div className="notes-section">
                    <h4>Notes:</h4>
                    <p>{bookingData.notes}</p>
                  </div>
                )}
              </div>

              <div className="location-info">
                <h3>Location</h3>
                <div className="info-item">
                  <MapPin size={16} />
                  <span>123 Beauty Lane, Wellness District, City 12345</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="booking-actions">
        {currentStep > 1 && (
          <button className="btn-secondary" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 4 ? (
          <button
            className="btn-primary"
            onClick={nextStep}
            disabled={!isStepComplete(currentStep)}
          >
            Next
          </button>
        ) : (
          <button className="btn-primary" onClick={handleSubmit}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingPage;