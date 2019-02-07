import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar navbar-dark bg-dark'}>
                <div className='navbar-hader'>
                    <a className={'navbar-brand'} href={'#id'}>
                    Quiz App <i className="fas fa-question"></i>
                    </a>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;