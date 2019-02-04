import React from "react";

export const VerticalSplit = ({children}) => {
    return (
        <div className="vertical-split-container">
            {children}
        </div>
    );
};

export const Column = ({children, title}) => {
    return (
        <section className="column">
            {title ? <h2 className="column-title">{title}</h2> : null}
            {children}
        </section>
    );
};
