
export function addUser(user){
    console.log("add user")
    return {type:"ADD_USER" ,payload:user}
}
export function deleteUser(name){
    return {type:'DELETE_USER',payload:name}
}