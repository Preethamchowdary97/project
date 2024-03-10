import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartForFreeClick = () => {
    navigate('/Login');
  };

  return (
    <div className='backgroundcolor'>
      <div className="ct-inner-content">
        <section id="section-2-243" className="ct-section">
          <div className="ct-section-inner-wrap">
            <div id="new_columns-3-243" className="ct-new-columns">
              <div id="div_block-4-243" className="ct-div-block text-center">
                <h1 id="headline-5-243" className="ct-headline bold-heading large-font">
                  ONLINE VOTING SYSTEM
                </h1>
                <p id="text_block-6-243" className="ct-text-block large-font">
                  With VoteForChange online voting system, your organization members can cast their vote anywhere and anytime with secure internet voting
                </p>
                <div id="_rich_text-58-245" className="oxy-rich-text">
                  {/* Your content here */}
                </div>
                <div className='button-container text-center'>
                  <a id="link_button-9-240" className="ct-link-button start-free-btn free-trial-ballot-types large-font" onClick={handleStartForFreeClick}>
                    Create Election Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
