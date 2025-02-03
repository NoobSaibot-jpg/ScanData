import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ linkStyle, activeStyle, onClick }) => {
    return (
        <>
            <HashLink 
                className={`${linkStyle}`}
                smooth 
                to="/#about"
                onClick={onClick}
            >
                Про нас
            </HashLink>
            <HashLink 
                className={`${linkStyle}`}
                smooth 
                to="/#services"
                onClick={onClick}
            >
                Послуги
            </HashLink>
            <HashLink 
                className={`${linkStyle}`}
                smooth 
                to="/#clients"
                onClick={onClick}
            >
                Клієнти
            </HashLink>
            <HashLink 
                className={`${linkStyle}`}
                smooth 
                to="/contact#contact"
                onClick={onClick}
            >
                Контакти
            </HashLink>
            <HashLink 
                className={`${linkStyle}`}
                smooth 
                to="/get-demo#demo"
                onClick={onClick}
            >
                Новини
            </HashLink>
        </>
    );
};

export default NavLinks;