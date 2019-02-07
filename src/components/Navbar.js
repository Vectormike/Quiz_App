import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar navbar-dark bg-dark'}>
                <a className={'navbar-brand'} href={'#id'}>
                    Quiz App<i class="fas fa-question"></i>
                </a>
            </nav>
        </div>
    )
}

export default Navbar;