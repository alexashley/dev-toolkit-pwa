export const decode = (jwt) => {
    if (!jwt) {
        return '';
    }

    const [, rawClaims] = jwt.split('.');

    if (!rawClaims) {
        return '';
    }

    return atob(rawClaims.replace(/_/g, '/').replace(/-/g, '+'));
};
