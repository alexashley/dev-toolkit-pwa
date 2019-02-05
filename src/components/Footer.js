import React from 'react';

const Link = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <div>
                    <h4>References</h4>
                    <ul>
                        <li>
                            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">
                                MDN
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
                                GFM Cheatsheet
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Misc</h4>
                    <ul>
                        <li>
                            <Link href="http://news.ycombinator.com">HN</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/alexashley">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link href="https://gist.github.com/alexashley">
                                Gists
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Link
                href={`https://github.com/alexashley/dev-toolkit-pwa/commit/${
                    process.env.REACT_APP_VERSION
                }`}
            >
                {`version: ${process.env.REACT_APP_VERSION.slice(0, 7)}`}
            </Link>
        </footer>
    );
};

export default Footer;
