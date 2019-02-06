import { Column, VerticalSplit } from './Layout';
import CopyMe from './CopyMe';
import Error from './Error';
import Highlight from './Highlight';
import React from 'react';
import * as format from '../util/format';

const InputPreviewPane = ({ rawValue, setRawValue, lang, transform }) => {
    let preview = {};

    if (transform) {
        preview = transform(rawValue);
    } else {
        preview = format[lang](rawValue);
    }

    return (
        <VerticalSplit>
            <Column>
                <CopyMe>
                    <textarea
                        className="text-area"
                        value={rawValue}
                        onChange={(event) => setRawValue(event.target.value)}
                    />
                </CopyMe>
            </Column>
            <Column>
                {preview.error ? (
                    <Error message={`Invalid ${lang.toUpperCase()}`} />
                ) : (
                    <Highlight lang={lang}>{preview.formatted}</Highlight>
                )}
            </Column>
        </VerticalSplit>
    );
};

export default InputPreviewPane;
