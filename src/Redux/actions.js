
export function addUser(user) {
    console.log("add user")
    return { type: "ADD_USER", payload: user }
}
export function deleteUser(name) {
    return { type: 'DELETE_USER', payload: name }
}
export function changeCurrentUser(userId) {
    return { type: 'CHANGE_CURRENT_USER', payload: userId }
}
export function addToCart(cart) {
    return { type: 'ADD_TO_CART', payload: cart }
} 
export function emptyCart() {
    return { type: 'EMPTY_CART', payload: [] }
}
export function addOrder(order) {
    return { type: 'ADD_ORDER', payload: order }
}