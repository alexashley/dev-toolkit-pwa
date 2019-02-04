import React from 'react';
import './App.css';
import '../node_modules/highlight.js/styles/darcula.css';

import TabGroup, {Tab} from "./components/TabGroup";
import Footer from "./components/Footer";
import JsonPrettyPrint from "./components/Json";

const App = () => {
    return (
        <React.Fragment>
            <TabGroup>
                <Tab title="json">
                    <JsonPrettyPrint/>
                </Tab>
                <Tab title="xml">
                    <p>xml tab</p>
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
            <Footer/>
        </React.Fragment>
    );
};
export default App;
