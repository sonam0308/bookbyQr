import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#myNavmenu" data-canvas="body">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <div className='header'>
                    <a className="navbar-brand" href="/">
                        <img src="img/svg/logo.svg" className="logo" alt="ZASTA" />
                    </a>
                    <div className='login-button'><button style={{ padding: '10px', width: '150%' }}>Login</button></div>
                </div>
            </div>
        </>
    )
};

export default Header;
