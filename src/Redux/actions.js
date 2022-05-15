
export function addUser(user){
    console.log("add user")
    return {type:"ADD_USER" ,payload:user}
}
export function deleteUser(name){
    return {type:'DELETE_USER',payload:name}
}
export function changeCurrentUser(userId){
    return {type:'CHANGE_CURRENT_USER',payload:userId}
}