import React, { useState } from 'react';

import InputPreviewPane from '../components/InputPreviewPane';
import * as jwt from '../util/jwt';
import * as format from '../util/format';

const defaultInput =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM';

const transform = (input) => {
    const claims = jwt.decode(input);

    return format.json(claims);
};

const JwtDecode = () => {
    const [rawJwt, setRawJwt] = useState(defaultInput);

    return (
        <InputPreviewPane
            lang={'json'}
            transform={transform}
            rawValue={rawJwt}
            setRawValue={setRawJwt}
        />
    );
};

export default JwtDecode;
