import React from 'react';

const HomeStyles = () => {
  return (
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .home-page {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .btn-primary {
        background: white;
        color:#6141B0;
        padding: 15px 35px;
        border-radius: 50px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.125rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      }

      .btn-secondary {
        background: transparent;
        color: white;
        padding: 15px 35px;
        border: 2px solid white;
        border-radius: 50px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.125rem;
        transition: all 0.3s ease;
      }

      .btn-secondary:hover {
        background: white;
        color: #6141B0;
      }

      /* Services Section */
      .services-section {
        padding: 80px 0;
        background: #f9fafb;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section-title {
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #1f2937;
      }

      .section-subtitle {
        text-align: center;
        font-size: 1.25rem;
        color: #6b7280;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .service-card {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
      }

      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }

      .service-image {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }

      .service-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #1f2937;
      }

      .service-description {
        color: #6b7280;
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }

      .service-price {
        font-size: 1.25rem;
        font-weight: bold;
        color: #6141B0;
        margin-bottom: 1.5rem;
      }

      .service-button {
        background: linear-gradient(135deg, #6b46c1, #553c9a);
        color: white;
        padding: 10px 25px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 500;
        transition: background 0.3s ease;
      }

      .service-button:hover {
        background:rgb(117, 0, 241);
      }

      /* Testimonials Section */
      .testimonials-section {
        padding: 80px 0;
        background: linear-gradient(135deg, #1f2937, #374151);
        color: white;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .testimonial-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .testimonial-rating {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 1rem;
      }

      .testimonial-comment {
        font-size: 1.125rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        font-style: italic;
      }

      .testimonial-author {
        font-weight: bold;
        margin-bottom: 0.25rem;
      }

      .testimonial-service {
        color:#6141B0;
        font-size: 0.9rem;
      }

      /* CTA Section */
      .cta-section {
        padding: 80px 0;
        background: linear-gradient(135deg, #6b46c1, #553c9a);
        color: white;
        text-align: center;
      }

      .cta-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .cta-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .nav-menu {
          display: none;
        }

        .mobile-menu-btn {
          display: block;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
        }

        .hero-buttons {
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-size: 2rem;
        }

        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
};

export default HomeStyles; 