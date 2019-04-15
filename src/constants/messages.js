const messageMap = {
    DUPLICATE_ENTITY: 'Duplicate entity',
    NOT_FOUND: 'Not found',
    BAD_REQUEST: 'Bad request',
    ACCESS_DENIED: 'Access denied',
    TOKEN_EXPIRED: 'Token expired',
    INVALID_TOKEN: 'Invalid token',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    ILLEGAL_ARGUMENT_EXCEPTION: 'Illegal argument exception',
    INVALID_PASSWORD: 'Invalid password',
    SAME_PASSWORD: 'Same password',
}

const messages = {
    get (key) {
        return (messageMap[key]) ? messageMap[key] : messageMap['INTERNAL_SERVER_ERROR']
    }
}

export { messages, messageMap }
