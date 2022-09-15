export let SetUser=(User)=>
{
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