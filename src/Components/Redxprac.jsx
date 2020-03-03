import React from 'react'
// import { createStore} from 'redux'
import {increamentAction, decreamentAction, reset} from '../Components/Actions/allActions'
import {connect} from 'react-redux'

//READ ME
/*
1. Libs: react-redux , redux --> npm install redux react-redux
2. Create a store in the index js file. import createStore from redux
3. Use provider from the react-redux and wrap the whole project to it and pass the store created as props to it. will make the store available everywhere in the project
4. create an action file and a reducer file
5. mapstatetoprops will take the store data and make it available in the props of the component. take the function and pass it to connect function. connect is to be taken from react-redux lib
6. mapdispatchtoprops will dispatch the action type to be dispatched and this fuction will also be available in the props.
7. create the actions and create the reducers and do the needed functionality
8. git repo : 

*/

const Redxprac =(props)=>{
   const {count,alterCount}=props
    return(
        <div>
            <h1>Count :{count} </h1>
            <button onClick={()=>{
                alterCount(increamentAction,5)
            }}> Increament</button>
            <button onClick={()=>{
                alterCount(decreamentAction,5)
            }} > Decrement</button>
            <button onClick={()=>{
                alterCount(reset,5)
            }}> Reset</button>
        </div>
    )
}
// takes the data from the store and adds it to the props of the component its invoked in
const mapStateToProps=(state)=>{
    return{
        count: state.count
    }
}

//sends the data from this component

const mapDispatchToProps=(dispatch)=>{
    return{
        alterCount:(actionType,val)=>{
            dispatch(actionType(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Redxprac)

