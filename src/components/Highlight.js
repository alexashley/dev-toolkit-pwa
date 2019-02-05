import React, { useRef, useEffect } from 'react';
import highlight from 'highlight.js';

import CopyMe from './CopyMe';

const Highlight = ({ children, lang }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        highlight.highlightBlock(codeRef.current);
    }, [children]);

    return (
        <CopyMe>
            <pre className={'highlight'}>
                <code ref={codeRef} className={lang}>
                    {children}
                </code>
            </pre>
        </CopyMe>
    );
};

export default Highlight;
