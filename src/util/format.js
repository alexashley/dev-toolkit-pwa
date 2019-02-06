import beautify from 'vkbeautify';

export const json = (content) => {
    let formatted = '';
    let parseError = false;

    try {
        formatted = JSON.stringify(JSON.parse(content), null, 4);
    } catch (error) {
        parseError = error.message;
    }

    return {
        formatted,
        error: parseError,
    };
};

export const xml = (xml) => {
    let formatted = '',
        parseError = false;

    try {
        formatted = beautify.xml(xml);
    } catch (error) {
        parseError = true;
        console.error(error);
    }

    return {
        error: parseError,
        formatted,
    };
};
