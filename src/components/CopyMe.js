import React, {useRef} from 'react';
import {FaCopy} from "react-icons/fa";

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

export default CopyMe;