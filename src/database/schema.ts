const users = {
    title: 'users',
    version: 1,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100 // <- the primary key must have set maxLength
        },
        nom_user: {
            type: 'string'
        },
        role_user: {
            type: 'string'
        },
    },
    required: ['nom_user', 'role_user', 'id'],
}

export { users }