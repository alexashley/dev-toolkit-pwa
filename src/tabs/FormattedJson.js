import React, { useState } from 'react';

import { VerticalSplit, Column } from '../components/Layout';
import Error from '../components/Error';
import Highlight from '../components/Highlight';
import CopyMe from '../components/CopyMe';

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
        error: parseError,
    };
};

const FormattedJson = () => {
    const [rawJson, setRawJson] = useState('{"a": "b", "c": [1, 2, 3]}');
    const { pretty, error } = prettyPrint(rawJson);

    return (
        <VerticalSplit>
            <Column>
                <CopyMe>
                    <textarea
                        className="text-area"
                        value={rawJson}
                        onChange={(event) => setRawJson(event.target.value)}
                    />
                </CopyMe>
            </Column>
            <Column>
                {error ? (
                    <Error message="Invalid JSON" />
                ) : (
                    <Highlight lang="json">{pretty}</Highlight>
                )}
            </Column>
        </VerticalSplit>
    );
};

export default FormattedJson;
