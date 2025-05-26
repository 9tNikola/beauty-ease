import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'mission',
  stats: [
    { 
      icon: 'Users', 
      number: '50K+', 
      label: 'Satisfied Clients', 
      growth: '+25% this year' 
    },
    { 
      icon: 'Award', 
      number: '200+', 
      label: 'Expert Professionals', 
      growth: 'Certified & Trained' 
    },
    { 
      icon: 'Star', 
      number: '4.9', 
      label: 'Client Rating', 
      growth: 'From 10K+ reviews' 
    },
    { 
      icon: 'TrendingUp', 
      number: '98%', 
      label: 'Success Rate', 
      growth: 'Industry Leading' 
    }
  ],
  milestones: [
    { 
      year: '2020', 
      title: 'Founded', 
      desc: 'Started with a vision to revolutionize beauty booking' 
    },
    { 
      year: '2021', 
      title: 'First 1000 Clients', 
      desc: 'Achieved our first milestone of satisfied customers' 
    },
    { 
      year: '2022', 
      title: 'National Expansion', 
      desc: 'Expanded services to 15+ major cities' 
    },
    { 
      year: '2023', 
      title: 'Award Recognition', 
      desc: 'Best Beauty Tech Platform - Industry Awards' 
    },
    { 
      year: '2024', 
      title: 'International Launch', 
      desc: 'Expanding to global markets' 
    }
  ],
  values: [
    {
      icon: 'Shield',
      title: 'Trust & Safety',
      description: 'All professionals are background-verified with insurance coverage and quality guarantees.',
      features: ['Background Verified', 'Insured Services', '24/7 Support']
    },
    {
      icon: 'Sparkles',
      title: 'Premium Excellence',
      description: 'We maintain the highest standards through continuous training and premium product partnerships.',
      features: ['Certified Professionals', 'Premium Products', 'Latest Techniques']
    },
    {
      icon: 'Globe',
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology to deliver seamless experiences and convenience.',
      features: ['AI-Powered Matching', 'Smart Scheduling', 'Real-time Updates']
    }
  ],
  leadership: [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      bio: '15+ years in beauty industry, Former VP at leading cosmetics brand'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Tech visionary with expertise in AI and marketplace platforms'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Operations excellence expert, ensuring seamless service delivery'
    }
  ]
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  }
});

export const { setActiveTab } = aboutSlice.actions;
export default aboutSlice.reducer; 