import * as format from './format';

const escapeCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
};

export const escape = (xml) => {
    let escaped = xml;

    Object.entries(escapeCharacters).forEach(([char, escapedVersion]) => {
        escaped = escaped.replace(new RegExp(char, 'g'), escapedVersion);
    });

    return escaped;
};

export const unescape = (xml) => {
    let unescaped = xml;

    Object.entries(escapeCharacters).forEach(([char, escapedVersion]) => {
        unescaped = unescaped.replace(new RegExp(escapedVersion, 'g'), char);
    });

    return format.xml(unescaped);
};
