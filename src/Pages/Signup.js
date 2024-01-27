import React from 'react'
import Header from './../Components/Header';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { ArrowRights, ConfirmPassword, Email, MorraLogo, Password } from '../Imports/ImportImages';

function Signup() {
  return (
    <div className='height-page-style'>
    <Header/>
    <section className='login signup'>
        <Row>
            <Col lg={6}>
                <div className='logo-area'>
                    <img src={MorraLogo} alt='morra-logo'/>
                </div>
            </Col>
            <Col lg={6}>
                <div className='login-content'>
                    <h2>Log in</h2>
                    <p>Log in to Morra using your Email</p>
                    <div className='login-body'>
                        <div className='form-group'>
                            <label>EMAIL</label>
                            <div className='field-area'>
                                <input type='text' placeholder='Your email...'/>
                                <img src={Email} alt='email'/>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>PASSWORD</label>
                            <div className='field-area'>
                                <input type='text' placeholder='Password'/>
                                <img src={Password} alt='password'/>
                            </div>
                        </div>
                        <div className='actions'>
                            <a href='' className='custom-btn'>
                                LOGIN
                            </a>
                        </div>
                        <div className='forgot-password'>
                            <a href=''>
                                Forgotten password?
                            </a>
                            <a href=''>
                                Don’t have an account? Create one now <img src={ArrowRights} alt='arrowrights'/>
                            </a> 
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </section>
    </div>
  )
}

export default Signup