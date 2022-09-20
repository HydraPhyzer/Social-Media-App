let InitialState={
    User:{},
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
        default:
            return State;
    }
}

export default Reduce