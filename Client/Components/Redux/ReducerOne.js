let InitialStata={
    User:{}
};

let Reduce=(State=InitialStata , Action)=>
{
    switch (Action) {
        case "SET-USER":
            return State;
        default:
            return State;
    }
}

export default Reduce