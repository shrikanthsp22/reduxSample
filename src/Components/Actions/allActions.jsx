//increment action
export const increamentAction=(payload)=>{
    return{
    type: 'INCREMENT',
    payload: payload
    }
}

//decrement action

export const decreamentAction=(payload)=>{
    return{
    type: 'DECREMENT',
    payload: payload
    }
}

//Reset

export const reset =(payload)=>{
    return{
        type:'RESET',
        payload:payload
    }
}