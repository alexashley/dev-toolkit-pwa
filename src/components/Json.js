import React, {useRef, useState, useEffect} from 'react';
import highlight from 'highlight.js';
import {FaCopy} from "react-icons/fa";

const VerticalSplit = ({children}) => {
    return (
        <div className="vertical-split-container">
            {children}
        </div>
    );
};

const CopyMe = ({children}) => {
    const ref = useRef(null);
    const copy = () => {
        const value = ref.current.value || ref.current.innerText;

        navigator.clipboard.writeText(value);
    };

    return (
        <React.Fragment>
            <button onClick={copy} className="copy-button"><FaCopy size={20}/></button>
            {React.cloneElement(children, {ref})}
        </React.Fragment>
    );
};

const Highlight = ({children, lang}) => {
    const codeRef = useRef(null);

    useEffect(() => {
        highlight.highlightBlock(codeRef.current);
    }, [children]);

    return (
        <CopyMe>
            <pre>
                <code ref={codeRef} className={lang}>{children}</code>
            </pre>
        </CopyMe>
    );
};

const Column = ({children, title}) => {
    return (
        <section className="column">
            {title ? <h2 className="column-title">{title}</h2> : null}
            {children}
        </section>
    );
};

const Error = ({message}) => (
    <div className="error-message">
        {message}
    </div>
);

const prettyPrint = (content) => {
    let pretty = '';
    let parseError = false;

    try {
        pretty = JSON.stringify(JSON.parse(content), null, 4);
    } catch (error) {
        parseError = error.message;
    }

    return {
        pretty,
        error: parseError
    };
};

const JsonPrettyPrint = () => {
    const [rawJson, setRawJson] = useState('{"a": "b", "c": [1, 2, 3]}');
    const {pretty, error} = prettyPrint(rawJson);

    return (
        <VerticalSplit>
            <Column title="Input">
                <CopyMe>
                    <textarea
                        className="text-area"
                        value={rawJson}
                        onChange={(event) => setRawJson(event.target.value)}
                    />
                </CopyMe>
            </Column>
            <Column title="Formatted">
                {error ?
                    <Error message="Invalid JSON"/>
                    :
                    <Highlight lang='json'>
                        {pretty}
                    </Highlight>
                }
            </Column>
        </VerticalSplit>
    );
};

export default JsonPrettyPrint;
