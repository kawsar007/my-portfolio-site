
import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import Typed from 'react-typed';
import { headerData } from '../../../data/headerData';
import './landing.css';

import {
    FaFacebook, FaGithub, FaLinkedin, FaSkype, FaTwitter
} from 'react-icons/fa';
import { contactsData } from '../../../data/contactsData';

function LandingUI({ theme, drawerOpen, classes }) {


    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        {contactsData.linkedIn && (
                            <a
                                href={contactsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social linkedin-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {contactsData.github && (
                            <a
                                href={contactsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {contactsData.skype && (
                            <a
                                href={contactsData.skype}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaSkype
                                    className='landing--social twitter-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='Skype'
                                />
                            </a>
                        )}
                        {contactsData.facebook && (
                            <a
                                href={contactsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className='landing--social facebook-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                        {contactsData.twitter && (
                            <a
                                href={contactsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social twitter-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='twitter'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1>{headerData.name} MIA</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href="https://drive.google.com/file/d/1JEtrEfqUp3mRjq8N8iVjMa9SHaA7ANKD/view?usp=sharing"
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className={classes.resumeBtn}>
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className={classes.contactBtn}>
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingUI;