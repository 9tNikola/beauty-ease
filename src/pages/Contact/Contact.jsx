import React, { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    HeadphonesIcon,
    Globe,
    Calendar,
    CheckCircle,
    ArrowRight,
    Star,
    Users,
    Zap,
    Shield,
    ChevronDown
} from 'lucide-react';
import './Contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'email'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const contactInfo = [
        {
            icon: Phone,
            title: 'Call Us',
            info: '+1 (555) 123-4567',
            subInfo: 'Mon-Fri, 8AM-8PM EST',
            action: 'tel:+15551234567',
            iconClass: 'blue'
        },
        {
            icon: Mail,
            title: 'Email Us',
            info: 'hello@beautyease.com',
            subInfo: 'Response within 2 hours',
            action: 'mailto:hello@beautyease.com',
            iconClass: 'purple'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            info: 'Chat with our team',
            subInfo: 'Available 24/7',
            action: '#',
            iconClass: 'green'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            info: '123 Beauty Street',
            subInfo: 'New York, NY 10001',
            action: '#',
            iconClass: 'orange'
        }
    ];

    const services = [
        'Hair Styling & Color',
        'Makeup & Beauty',
        'Nail Care & Art',
        'Skincare & Facials',
        'Massage Therapy',
        'Wedding & Events',
        'Men\'s Grooming',
        'Other Services'
    ];

    const features = [
        {
            icon: Zap,
            title: 'Instant Response',
            description: 'Get replies within minutes during business hours'
        },
        {
            icon: Shield,
            title: 'Secure & Private',
            description: 'Your information is protected with enterprise-grade security'
        },
        {
            icon: Users,
            title: 'Expert Support',
            description: 'Speak directly with beauty professionals and booking specialists'
        }
    ];

    const faqs = [
        {
            question: 'How quickly can I book an appointment?',
            answer: 'You can book appointments instantly through our platform. Most services are available within 24-48 hours, and emergency bookings can often be accommodated same-day.'
        },
        {
            question: 'Are all beauty professionals verified?',
            answer: 'Yes, every professional on our platform goes through a comprehensive verification process including background checks, certification validation, and skills assessment.'
        },
        {
            question: 'What if I need to cancel or reschedule?',
            answer: 'You can cancel or reschedule appointments up to 4 hours before the scheduled time without any fees. Our flexible booking system makes changes easy.'
        },
        {
            question: 'Do you offer group bookings for events?',
            answer: 'Absolutely! We specialize in group bookings for weddings, parties, and corporate events. Contact our events team for custom packages and pricing.'
        },
        {
            question: 'What safety measures are in place?',
            answer: 'We maintain strict hygiene protocols, use only premium sanitized equipment, and all professionals are insured. Your safety and comfort are our top priorities.'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
                preferredContact: 'email'
            });
        }, 3000);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="contact-page">

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-grid">
                        {contactInfo.map((contact, index) => (
                            <div key={index} className="contact-card">
                                <div className={`contact-icon ${contact.iconClass}`}>
                                    <contact.icon size={24} />
                                </div>
                                <h3 className="contact-title">{contact.title}</h3>
                                <div className="contact-info">{contact.info}</div>
                                <div className="contact-subinfo">{contact.subInfo}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="features-section-inline">
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="feature-icon">
                                        <feature.icon size={20} />
                                    </div>
                                    <div className="feature-content">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-content-section">
                <div className="container">
                    <div className="content-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <div className="form-header">
                                <h2 className="form-title">Send us a Message</h2>
                                <p className="form-subtitle">
                                    Fill out the form below and we'll get back to you within 2 hours
                                </p>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Service Interested In</label>
                                        <select
                                            name="service"
                                            className="form-select"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Your Message *</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Tell us about your needs..."
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Preferred Contact Method</label>
                                    <div className="radio-group">
                                        <label className="radio-option">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="email"
                                                checked={formData.preferredContact === 'email'}
                                                onChange={handleInputChange}
                                                className="radio-input"
                                            />
                                            <span className="radio-label">Email</span>
                                        </label>
                                        <label className="radio-option">
                                            <input
                                                type="radio"
                                                name="preferredContact"
                                                value="phone"
                                                checked={formData.preferredContact === 'phone'}
                                                onChange={handleInputChange}
                                                className="radio-input"
                                            />
                                            <span className="radio-label">Phone</span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="btn-spinner"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {isSubmitted && (
                                    <div className="success-message">
                                        <CheckCircle size={18} />
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Sidebar */}
                        <div className="contact-sidebar">
                            <div className="sidebar-content">
                                <h2 className="sidebar-title">Contact Information</h2>
                                <p className="sidebar-description">
                                    We'd love to hear from you! Here's how you can reach us for
                                    appointments, inquiries, or just to say hello.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-detail">
                                        <div className="detail-icon">
                                            <Phone size={18} />
                                        </div>
                                        <div className="detail-content">
                                            <h4>Phone Number</h4>
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="contact-detail">
                                        <div className="detail-icon">
                                            <Mail size={18} />
                                        </div>
                                        <div className="detail-content">
                                            <h4>Email Address</h4>
                                            <p>hello@beautyease.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-detail">
                                        <div className="detail-icon">
                                            <MapPin size={18} />
                                        </div>
                                        <div className="detail-content">
                                            <h4>Our Location</h4>
                                            <p>123 Beauty Street, New York, NY 10001</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="working-hours">
                                    <h3 className="hours-title">
                                        <Clock size={18} />
                                        Working Hours
                                    </h3>
                                    <div className="hours-list">
                                        <div className="hours-item">
                                            <span className="day">Monday - Friday</span>
                                            <span className="time">8:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="hours-item">
                                            <span className="day">Saturday</span>
                                            <span className="time">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="hours-item">
                                            <span className="day">Sunday</span>
                                            <span className="time">10:00 AM - 4:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <div className="map-container">
                        <h2 className="section-title">Our Location</h2>
                        <p className="section-subtitle">
                            Visit our beautiful salon in the heart of New York City
                        </p>
                        <div className="map-placeholder">
                            <Globe size={48} />
                            <span>Map would be displayed here</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Find answers to common questions about our services and booking
                            process
                        </p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown className="faq-toggle" size={20} />
                                </button>
                                {activeFaq === index && (
                                    <div className="faq-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;