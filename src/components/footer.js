import React from 'react';
import Navigation from './navigation';



const Footer = () => {
    return (

        <footer className="footer">
            <span className="footer-wordpress">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
        </span>
        <Navigation/>
      </footer>

    );
};

export default Footer;