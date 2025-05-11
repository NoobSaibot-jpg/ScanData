import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ linkStyle, activeStyle, onClick }) => {
    return (
        <>
            <HashLink 
                smooth 
                to="/about" 
                className={linkStyle}
                activeClassName={activeStyle}
                onClick={onClick}
            >
                Про нас
            </HashLink>
            <HashLink 
                smooth 
                to="/contact" 
                className={linkStyle}
                activeClassName={activeStyle}
                onClick={onClick}
            >
                Контакти
            </HashLink>
            <HashLink 
                smooth 
                to="/news" 
                className={linkStyle}
                activeClassName={activeStyle}
                onClick={onClick}
            >
                Новини
            </HashLink>
        </>
    );
};

export default NavLinks;