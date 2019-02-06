import InputPreviewPane from '../components/InputPreviewPane';
import * as xml from '../util/xml';
import React, { useState } from 'react';

const defaultInput = `<wsdl:message name="ICalculator_Add_InputMessage"><wsdl:part name="parameters" element="tns:Add" /></wsdl:message>`;

const XmlEscape = () => {
    const [rawXml, setRawXml] = useState(defaultInput);
    const transform = (input) => {
        return {
            formatted: xml.escape(input),
        };
    };

    return (
        <InputPreviewPane
            lang={'xml'}
            transform={transform}
            rawValue={rawXml}
            setRawValue={setRawXml}
        />
    );
};

export default XmlEscape;
