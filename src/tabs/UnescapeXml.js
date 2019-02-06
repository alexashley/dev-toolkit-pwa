import InputPreviewPane from '../components/InputPreviewPane';
import * as xml from '../util/xml';
import React, { useState } from 'react';

const defaultInput = `&lt;wsdl:message name=&quot;ICalculator_Add_InputMessage&quot;&gt;&lt;wsdl:part name=&quot;parameters&quot; element=&quot;tns:Add&quot; /&gt;&lt;/wsdl:message&gt;`;

const XmlUnescape = () => {
    const [rawXml, setRawXml] = useState(defaultInput);

    return (
        <InputPreviewPane
            lang={'xml'}
            transform={xml.unescape}
            rawValue={rawXml}
            setRawValue={setRawXml}
        />
    );
};

export default XmlUnescape;
