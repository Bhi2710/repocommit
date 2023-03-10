const repository = [];

const handleData = (state=repository, action) => {
    switch (action.type){
        case "ADDREPOS":
            return [...state, action.payload];
        default:
            return state;    
    }
    
}

export default handleData;






