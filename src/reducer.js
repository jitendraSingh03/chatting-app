export const initialState={
    user:null,
};

export const actionTypes ={
    SET_US:"SET_USER",
};


const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case actionTypes.SET_US:
            return {
                ... state,user:action.user
            }
        default:
            return state;
    }
}

export default reducer;