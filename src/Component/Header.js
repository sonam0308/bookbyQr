import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar-header-nav">
                {/* <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button> */}
                <div className='header'>
                    <Link className="navbar-brand" to="/">
                        <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                    </Link>
                    {/* <div className='login-button'>
                        <button
                            style={{
                                padding: '10px', width: '150%', fontSize: '20px',
                                backgroundColor: '#E7ca15', color: '#3b5998', fontWeight: '900'
                            }}>
                            Login
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
};

export default Header;
