import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      title: 'Hair Styling',
      description: 'Professional cuts, colors, and styling for all hair types',
      price: 'From $50',
      image: '💇‍♀️'
    },
    {
      title: 'Facial Treatments',
      description: 'Deep cleansing, anti-aging, and rejuvenating facials',
      price: 'From $80',
      image: '🧴'
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Professional nail care and beautiful nail art',
      price: 'From $35',
      image: '💅'
    },
    {
      title: 'Makeup Services',
      description: 'Bridal, party, and special occasion makeup',
      price: 'From $60',
      image: '💄'
    },
    {
      title: 'Massage Therapy',
      description: 'Relaxing and therapeutic massage treatments',
      price: 'From $70',
      image: '💆‍♀️'
    },
    {
      title: 'Eyebrow Shaping',
      description: 'Threading, waxing, and eyebrow tinting services',
      price: 'From $25',
      image: '👁️'
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! The online booking made it so convenient and the stylists were incredibly professional.',
      service: 'Hair Styling'
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      comment: 'Best facial I\'ve ever had! My skin looks and feels amazing. Will definitely be coming back.',
      service: 'Facial Treatment'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      comment: 'The makeup for my wedding was perfect! They understood exactly what I wanted and executed it flawlessly.',
      service: 'Bridal Makeup'
    }
  ],
  features: [
    {
      icon: 'Calendar',
      title: '24/7 Online Booking',
      description: 'Book your appointments anytime, anywhere with our easy-to-use online system.'
    },
    {
      icon: 'Users',
      title: 'Expert Professionals',
      description: 'Our certified beauty experts bring years of experience and latest techniques.'
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Guarantee',
      description: 'We guarantee satisfaction with every service or your money back.'
    },
    {
      icon: 'Clock',
      title: 'Flexible Timing',
      description: 'Choose from various time slots that fit your busy schedule perfectly.'
    }
  ]
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
});

export default homeSlice.reducer; 