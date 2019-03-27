import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar navbar-inverse bg-inverse'}>
                <div className='navbar-header'>
                    <a className={'navbar-brand'} href={'#id'}>
                    Quiz App <i className="fas fa-question"></i>
                    </a>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;