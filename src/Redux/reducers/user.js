import produce from 'immer'

const initialState = {
    users: [
        {
            userId:101,
            name: 'sara',
            password: '1'
        },
        {
            userId:102,
            name: 'rivka',
            password: '2'
        }
    ],
    currentUserPassword: '2'
}

const user = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        case 'DELETE_USER':
            state.users.splice(action.payload, 1)
            break;
    }
}
    , initialState)

export default user

