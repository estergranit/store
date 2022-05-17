import produce from 'immer'

const initialState = {
    users: [
        {
            userId: 100,
            name: 'guest',
            password: '',
            cart: []
        }, 
        {
            userId: 101,
            name: 'sara',
            password: '1',
            cart: []
        },
        {
            userId: 102,
            name: 'rivka',
            password: '2',
            cart: []
        }
    ],
    currentUserId: 100
}

const user = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        case 'DELETE_USER':
            state.users.splice(action.payload, 1)
            break;
        case 'CHANGE_CURRENT_USER':
            state.currentUserId = action.payload
            break;
        //TODO
        //לא מתעדכן בזמן
        // case 'ADD_TO_CART':
        //     state.users
        //     .filter(user=>user.userId===state.currentUserId)[0].cart=state.users
        //     .filter(user=>user.userId===state.currentUserId)[0].cart.push(action.payload)//להוסיף בדיקה ש currentUserId גדול מ 0?

        //     break
        case 'ADD_TO_CART':
            let user = state.users
                .filter(user => user.userId === state.currentUserId)[0]
            let item = user.cart.find(item => item.productName == action.payload.productName)
            if (item) {
                //item.quantity =action.payload.quantity
                state.users
                    .filter(user => user.userId === state.currentUserId)[0].cart
                    .find(item => item.productName == action.payload.productName)
                    .quantity = action.payload.quantity
            }
            else {
                //user.cart.push(action.payload) 
                state.users
                    .filter(user => user.userId === state.currentUserId)[0].cart
                    .push(action.payload)
            }
            // let cart = user.cart.push(action.payload)
            // user.cart = cart
            break
    }
}
    , initialState)

export default user

