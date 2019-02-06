import React, { useState } from 'react';

import InputPreviewPane from '../components/InputPreviewPane';

const FormattedJson = () => {
    const [rawJson, setRawJson] = useState('{"a": "b", "c": [1, 2, 3]}');

    return (
        <InputPreviewPane
            lang={'json'}
            rawValue={rawJson}
            setRawValue={setRawJson}
        />
    );
};

export default FormattedJson;
