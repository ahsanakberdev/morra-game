import {React,useEffect,useState} from 'react'
import { Facebook, Instagram, Logo, Pinterest, Tiktok, Twitter, Youtube,PaymentSystem } from '../Imports/ImportImages'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Footer() {

    const [isNavOpen, setNavOpen] = useState(false);
    const [isFooterItemIndex, setFooterItemIndex] = useState(false);

    const toggleNav = (index) => {
        setFooterItemIndex(index)
        setNavOpen(!isNavOpen);
    };
  
    useEffect(() => {
      const handleResize = () => {
        // Close navigation on mobile initially, and toggle it on subsequent resizes
        setNavOpen(window.innerWidth > 767);
      };
  
      // Set initial state on component mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
        <footer>
            <div className='container'>
                <div className='footer-wrapper'>
                    <div className='logo'>
                        <a href=''>
                            <img src={Logo} alt='logo'/>
                        </a>
                    </div>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className='footer-box'>
                                <h4 className={`nav-heading ${isNavOpen && isFooterItemIndex === 0 ? 'open' : ''}`} onClick={()=>toggleNav(0)}>Resources</h4>
                                <ul className={`nav-list ${isNavOpen && isFooterItemIndex === 0 ? 'show' : ''}`}>
                                    <li><a href=''>Home</a></li>
                                    <li><a href=''>About us</a></li>
                                    <li><a href=''>Marketplace</a></li>
                                    <li><a href=''>Inventory</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='footer-box'>
                                <h4 className={`nav-heading ${isNavOpen && isFooterItemIndex === 1 ? 'open' : ''}`} onClick={()=>toggleNav(1)}>Made By MORRA</h4>
                                <ul className={`nav-list ${isNavOpen && isFooterItemIndex === 1 ? 'show' : ''}`}>
                                    <li><a href=''>Javel Runaway 2024</a></li>
                                    <li><a href=''>Dead Island 2</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='footer-box'>
                                <h4 className={`nav-heading ${isNavOpen && isFooterItemIndex === 2 ? 'open' : ''}`} onClick={()=>toggleNav(2)}>GENERAL</h4>
                                <ul className={`nav-list ${isNavOpen && isFooterItemIndex === 2 ? 'show' : ''}`}>
                                    <li><a href=''>Store Refund Policy</a></li>
                                    <li><a href=''>Privacy Policy</a></li>
                                    <li><a href=''>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className='footer-box'>
                                <h4 className={`nav-heading ${isNavOpen && isFooterItemIndex === 3 ? 'open' : ''}`} onClick={()=>toggleNav(3)}>GET IN TOUCH</h4>
                                <ul className={`nav-list ${isNavOpen && isFooterItemIndex === 3 ? 'show' : ''}`}>
                                    <li>Call: 123 456 7890</li>
                                    <li>Email: info@morra.com</li>
                                    <li><a href=''>Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div className='footer-box mt-md-5 mt-0'>
                                <h4 className={`nav-heading lg-mt-5 mt-0 ${isNavOpen && isFooterItemIndex === 4 ? 'open' : ''}`} onClick={()=>toggleNav(4)}>FOLLOW US</h4>
                                <div className={`nav-list ${isNavOpen && isFooterItemIndex === 4 ? 'show' : ''}`}>
                                    <div>
                                        <a href=''>
                                            <img src={Facebook} alt=''/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <img src={Twitter} alt=''/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <img src={Pinterest} alt=''/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <img src={Instagram} alt=''/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <img src={Youtube} alt=''/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href=''>
                                            <img src={Tiktok} alt=''/>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='footer-bottom'>
                    <div>
                        <img src={PaymentSystem} alt='payemnt'/>
                    </div>
                    <p>© 2024 Morra Games. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer