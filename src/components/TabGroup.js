import React, { useState } from 'react';

const TabHeader = ({ title, changeTab, isSelected }) => {
    const classes = ['tab-header'];

    if (isSelected) {
        classes.push('active-tab-header');
    }

    return (
        <button onClick={changeTab} className={classes.join(' ')}>
            {title}
        </button>
    );
};

export const Tab = (props) => (
    <section className="tab">{props.children}</section>
);

const TabGroup = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabHeaders = React.Children.map(props.children, (child, index) => {
        const childProps = {
            changeTab: () => setTabIndex(index),
            isSelected: tabIndex === index,
            title: child.props.title,
        };

        return <TabHeader {...childProps} />;
    });
    const tabs = React.Children.map(props.children, (child, index) => {
        const classes = ['tab-content'];

        if (index !== tabIndex) {
            classes.push('hidden-tab');
        } else {
            classes.push('active-tab');
        }

        return <section className={classes.join(' ')}>{child}</section>;
    });

    return (
        <div className="tab-group">
            <nav className="tab-headers">{tabHeaders}</nav>
            {tabs}
        </div>
    );
};

export default TabGroup;
