import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Home.css'; // Import the CSS for the Home page
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media icons


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 5;
      if (window.scrollY > 100) {
        setIsVisible(true); // Show the boxes when scrolling down
      } else {
        setIsVisible(false); // Hide the boxes when at the top
      }
    };

    // Check screen size and only add the scroll event listener if it's larger than 768px
    const checkAndHandleScroll = () => {
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', handleScroll);
         setIsVisible(true);
      } else {
        window.removeEventListener('scroll', handleScroll);
        setIsVisible(false); // Ensure boxes are hidden when in responsive mode
      }
    };

    // Run the function to check screen size and set up scroll event listener
    checkAndHandleScroll();

    // Listen for window resize events to apply the listener conditionally
    window.addEventListener('resize', checkAndHandleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkAndHandleScroll);
    };
  }, []);


  // For WhyChooseUs section
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Define the motion variants for left and right animations
  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 }, // Starting off to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } // Animate back to original position
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 100 }, // Starting off to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } // Animate back to original position
  };

  // Define the animation variants for icons (invert) and text (down to up)
  // const iconVariants = {
  //   hidden: { opacity: 0, rotateX: 180 }, // Start with flipped icon
  //   visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6 } } // Animate to normal state
  // };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 }, // Start text from below
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Animate up to normal position
  // };
  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <h1>PRPAL OÜ</h1>
          <p >
            We provide an efficient platform for crypto lovers for
            <br />
            trading and making investments in cryptocurrency.
            <br />
              Join us to enjoy professional assistance for your growing.
          </p>
          <div className="buttons">
            <button className="btn-get-started">Get Started</button>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>

        {/* Animate container and boxes */}
        <motion.div
          className="container"
          initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
          animate={{
            backgroundColor: isVisible
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(255, 255, 255, 0)',
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2>$0</h2>
            <img src="../loan.png" alt="icon" className="icon1" />
            <p>TP Total Deposited</p>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>212K+</h2>
            <img src="../group.png" alt="icon" className="icon1" />
            <p>Total Members</p>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>$79M+</h2>
            <img src="../payment.png" alt="icon" className="icon1" />
            <p>Total Payments</p>
          </motion.div>

          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2>17+</h2>
            <img src="../globe.png" alt="icon" className="icon1" />
            <p>World Country</p>
          </motion.div>
        </motion.div>

        {/* Plans Section */}
        <div className="plans-section">
          <h2 className="plans-title">THE BEST CRYPTO MANAGEMENT PLAN</h2>
          <div className="plans-container">
            <motion.div
              className="plan-box left-box"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="ribbon">Popular</div>
              <h3 className='trade'>Trade Base</h3>
              <p className="colored-text">
                <strong>50 USDT</strong>
              </p>
              <p className='p2'>
                Validity: <strong>450</strong>
              
                Expected Profit UpTo: <strong>84%</strong>
              
                Profit Distribute: <strong>7 Days</strong>
              </p>
              <button className="deposit-btn">Deposit</button>
            </motion.div>

            <motion.div
              className="plan-box center-box"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='trade'>Master Node</h3>
              <p className="colored-text">
                <strong>2500 USDT</strong>
              </p>
              <p className='p2'>
                Master Node Price: <strong>10,000 XLTs</strong>
              
                Contract for <strong>36 months</strong> and could not be
                released before the time
              </p>
              <button className="deposit-btn">Deposit</button>
            </motion.div>

            <motion.div
              className="plan-box right-box"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className='trade'>Stack Base</h3>
              <p className="colored-text">
                <strong>50 XLT</strong>
              </p>
              <p className='p2'>
                Validity: <strong>450</strong>
              
                Expected Profit UpTo: <strong>84%</strong>
             
                Profit Distribute: <strong>7 Days</strong>
              </p>
              <button className="deposit-btn">Deposit</button>
            </motion.div>
          </div>
        </div>

        {/* WhyChooseUs Section */}
        <div className="why-choose-us-container">
          <h2 className="section-title">WHY CHOOSE US</h2>
          <p className="description">
            PrPal OÜ is a crypto investment company and provides services under
            Estonian law.
          </p>

          <div className="features" ref={ref}>
            <motion.div
              className="feature-box"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={leftToRightVariants} // Left to right animation
            >
              <div className="icon">&#128187;</div>
              <h3>Expert Management</h3>
              <p>
                A team of experts runs and looks after all the operations and
                processes at PrPal OÜ and takes all necessary steps to generate
                good revenue.
              </p>
            </motion.div>

            <motion.div
              className="feature-box"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={rightToLeftVariants} // Right to left animation
            >
              <div className="icon">&#128274;</div>
              <h3>Secure Investment</h3>
              <p>
                We ensure your investment is in safe hands and will grow
                exponentially. High-tech security measures guarantee the safety
                of users’ investment.
              </p>
            </motion.div>

            <motion.div
              className="feature-box"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={leftToRightVariants} // Left to right animation
              >
              <div className="icon">&#128196;</div>
              <h3>Registered Company</h3>
              <p>
                PrPal OÜ is registered under Estonian law and abides by all
                government regulations. Here, your investment is safe.
              </p>
            </motion.div>
            
        <motion.div 
          className="feature-box" 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={rightToLeftVariants} // Right to left animation
        >
          <div className="icon">💼</div>
          <h3>Instant Withdrawal</h3>
          <p>PrPal OÜ offers instant withdrawals for your profits. Fast processing of withdrawal requests is our priority and we really mean it.</p>
        </motion.div>

      
        <motion.div 
          className="feature-box" 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={leftToRightVariants} // Left to right animation
        >
          <div className="icon">🔍</div>
          <h3>Fully Transparent</h3>
          <p>PrPal OÜ believes in trust and transparency. Our entire system is transparent—nothing is hidden or harmful for investments.</p>
        </motion.div>

        
        <motion.div 
          className="feature-box" 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          variants={rightToLeftVariants} // Right to left animation
        >
          <div className="icon">🎧</div>
          <h3>Fast Customer Support</h3>
          <p>To resolve your problems, we offer fast customer support. Our 24/7 team of experts is ready to assist you. Feel free to contact us anytime.</p>
        </motion.div>

          </div>
        </div>
        <div className="how-it-works-container">
      <h2 className="section-title">HOW IT WORKS?</h2>
      <p className="description">
        Working of PrPal OÜ is very simple and easy to access. Its flow of working includes the following steps.
      </p>

      <div className="steps">
        {/* Step 1 - Register Account */}
        <motion.div
          className="step-box"
          initial="hidden"
        
        >
          <motion.img
            src="./verify.png" // Assuming the icons are stored locally
            alt="Register Account Icon"
            className="icon5"
          />
          <motion.h3 className='tr' >Register Account</motion.h3>
          <motion.p className='pt'>
            Sign up at PrPal OÜ by providing your credentials and get your account verified by verifying your email. Deposit as you like.
          </motion.p>
        </motion.div>
        <div className="dashed-line"></div>

        {/* Step 2 - Deposit as you like */}
        <motion.div
          className="step-box"
          initial="hidden"
        >
          <motion.img
            src="./deposit.png"
            alt="Deposit Icon"
            className="icon5"
          />
          <motion.h3 className='tr'>Deposit as u like</motion.h3>
          <motion.p className='pt'>
            Deposit funds through a simple procedure in your account for further proceedings and trading. Start trading or stacking to make more money.
          </motion.p>
        </motion.div>
        <div className="dashed-line"></div>

        {/* Step 3 - Withdraw Profit */}
        <motion.div
          className="step-box"
          initial="hidden"
        >
          <motion.img
            src="./cash.png"
            alt="Withdraw Profit Icon"
            className="icon5"
          />
          <motion.h3 className='tr'>Withdraw Profit</motion.h3>
          <motion.p className='pt'>
            Withdrawal of funds is also simple and straightforward. Make a withdrawal request in your account.
          </motion.p>
        </motion.div>

      </div>
    </div>
    <div className="referral-bonus-section">
      <h2 className="section-title">REFERRAL BONUS LEVEL</h2>
      <p className="section-subtitle">
        Help agencies to define their new business objectives and then create professional software.
      </p>

      <div className="bonus-grid">
        {/* Bonus 1 */}
        <motion.div
          className="bonus-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="icon-container">
            <img src="./money.png" alt="Icon 1" className="bonus-icon" />
          </div>
          <div className="bonus-details">
            <h3>Level 01 Instant 5% Bonus Reward</h3>
            <a href="#" className="learn-more">Learn More ➞</a>
          </div>
        </motion.div>

        {/* Bonus 2 */}
        <motion.div
          className="bonus-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="icon-container">
            <img src="./performance.png" alt="Icon 2" className="bonus-icon" />
          </div>
          <div className="bonus-details">
            <h3>Level 02-05 Instant 0.50% Bonus Reward</h3>
            <a href="#" className="learn-more">Learn More ➞</a>
          </div>
        </motion.div>

        {/* Bonus 3 */}
        <motion.div
          className="bonus-box"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="icon-container">
            <img src="./sales.png" alt="Icon 3" className="bonus-icon" />
          </div>
          <div className="bonus-details">
            <h3>Level 06-10 Instant 0.25% Bonus Reward</h3>
            <a href="#" className="learn-more">Learn More ➞</a>
          </div>
        </motion.div>
      </div>
      
    </div>
    <div className="crypto-plan-section">
      <div className="overlay1">
        <div className="crypto-plan-content">
          <h1>OUR CRYPTO PLAN</h1>
          <h2>WORLD WIDE BUSINESS RELATIONS</h2>
          <h2>FOR DEVELOPMENT</h2>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* <img src="/path-to-your-logo.png" alt="PrPal OÜ Logo" className="logo" /> */}
          <div className="footer-text">
            <h4>PrPal OÜ</h4>
            <p>Crypto Management Services</p>
          </div>
        </div>
        
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/deposits-withdrawals">Deposits & Withdrawals</a>
        </div>
        
        {/* <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 PrPal OÜ.com. All rights reserved.</p>
      </div>
    </footer>
      </div>
    </div>
    
  );
};

export default Home;
