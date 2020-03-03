const initState={
    count: 0
}
const rootReducer=(state= initState,action)=>{
    switch(action.type){
        case 'INCREMENT':{
            return{
                ...state,
                count : state.count+action.payload
            }
        } break
        case 'DECREMENT':{
            return{
                ...state,
                count : state.count-action.payload
            }
        } break
        case 'RESET':{
            return{
               ...initState
            }
        } break
        default: return state
    }
}
export default rootReducer