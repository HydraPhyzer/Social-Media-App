export let SetUser=(User)=>
{
    console.log(User)
    return{
        type:"SET-USER",
        payload:User
    }
}
export let GetUser=()=>
{
    return{
        type:"GET-USER",
    }
}