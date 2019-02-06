import React from 'react';
import './App.css';
import '../node_modules/highlight.js/styles/darcula.css';

import TabGroup, { Tab } from './components/TabGroup';
import Footer from './components/Footer';
import FormattedJson from './tabs/FormattedJson';
import FormattedXml from './tabs/FormattedXml';
import EscapeXml from './tabs/EscapeXml';
import UnescapeXml from './tabs/UnescapeXml';
import JwtDecode from './tabs/JwtDecode';

const App = () => {
    return (
        <div className="app">
            <TabGroup>
                <Tab title="json">
                    <FormattedJson />
                </Tab>
                <Tab title="xml">
                    <FormattedXml />
                </Tab>
                <Tab title="escape xml">
                    <EscapeXml />
                </Tab>
                <Tab title="unescape xml">
                    <UnescapeXml />
                </Tab>
                <Tab title="jwt decode">
                    <JwtDecode />
                </Tab>
                <Tab title="jwt encode">
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
