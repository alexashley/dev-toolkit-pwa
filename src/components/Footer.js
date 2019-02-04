import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">
                MDN JavaScript
            </a>
            <span>{`version: ${process.env.REACT_APP_VERSION}`}</span>
        </footer>
    );
};

export default Footer;
