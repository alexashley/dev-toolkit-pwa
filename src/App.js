import React from 'react';
import './App.css';
import '../node_modules/highlight.js/styles/darcula.css';

import TabGroup, { Tab } from './components/TabGroup';
import Footer from './components/Footer';
import FormattedJson from './tabs/FormattedJson';
import XmlUtils from './tabs/XmlUtils';

const App = () => {
    return (
        <div className="app">
            <TabGroup>
                <Tab title="json">
                    <FormattedJson />
                </Tab>
                <Tab title="xml">
                    <XmlUtils />
                </Tab>
                <Tab title="jwt">
                    <p>jwt tab</p>
                </Tab>
                <Tab title="md">
                    <p>md tab</p>
                </Tab>
                <Tab title="timer">
                    <p>timer tab</p>
                </Tab>
            </TabGroup>
            <Footer />
        </div>
    );
};

export default App;