const users =[
    {id:'1234', password : '1234',name:"태영"},
    {id:'2323', password : '2323',name:"수수"},
    {id:'1414', password : '1414',name:"혀혀"}
]

export function signIn({id,password}){
    const user = users.find(
        (user) => user.id === id && user.password ===password
    )

    if(user === undefined) throw new Error()
    return user
}