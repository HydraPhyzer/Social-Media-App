let InitialState={
    User:{},
    UserPosts:{},
};

let Reduce=(State=InitialState , Action)=>
{
    switch (Action.type) {
        case "SET-USER":
            return {
                ...State,
                User:Action.payload,
            };
        case "GET-USER":
            return {
                ...State,
                ...State.User,
            }
        case "SET-POSTS":
            return{
                ...State,
                UserPosts:Action.payload
            }
        default:
            return State;
    }
}

export default Reduce