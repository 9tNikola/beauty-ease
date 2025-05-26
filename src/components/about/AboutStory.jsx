import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../../store/slices/aboutSlice';

const AboutStory = () => {
  const dispatch = useDispatch();
  const { activeTab, milestones } = useSelector((state) => state.about);

  return (
    <section className="story-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From a simple idea to transforming the beauty industry globally
          </p>
        </div>

        <div className="tab-navigation">
          {['mission', 'vision', 'story'].map((tab) => (
            <button
              key={tab}
              onClick={() => dispatch(setActiveTab(tab))}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'mission' && (
            <div className="tab-panel">
              <h3 className="tab-title">Our Mission</h3>
              <p className="tab-description">
                To democratize access to premium beauty services by connecting skilled professionals 
                with clients through innovative technology, creating a seamless ecosystem where 
                beauty meets convenience, trust, and excellence.
              </p>
            </div>
          )}
          {activeTab === 'vision' && (
            <div className="tab-panel">
              <h3 className="tab-title">Our Vision</h3>
              <p className="tab-description">
                To become the world's most trusted beauty platform, setting new standards for 
                service quality, technological innovation, and customer satisfaction while 
                empowering beauty professionals to build thriving careers.
              </p>
            </div>
          )}
          {activeTab === 'story' && (
            <div className="tab-panel tab-story">
              <h3 className="tab-title">How It All Started</h3>
              <div className="story-grid">
                <div className="story-content">
                  <p className="story-paragraph">
                    Beauty Ease began in a small co-working space in 2020, born from founder Sarah Johnson's 
                    frustration with the fragmented beauty booking experience. As a busy professional, 
                    she struggled to find reliable, quality beauty services that fit her schedule.
                  </p>
                  <p className="story-paragraph">
                    What started as solving a personal problem quickly evolved into a mission to transform 
                    the entire industry. Today, we're proud to serve over 50,000 clients and support 
                    200+ beauty professionals across multiple countries.
                  </p>
                </div>
                <div className="milestones-card">
                  <div className="milestones-list">
                    {milestones.slice(0, 3).map((milestone, index) => (
                      <div key={index} className="milestone-item">
                        <div className="milestone-year">
                          {milestone.year.slice(-2)}
                        </div>
                        <div className="milestone-content">
                          <h4 className="milestone-title">{milestone.title}</h4>
                          <p className="milestone-desc">{milestone.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutStory; 