import React, { Component } from 'react'

export default class BasicTodo extends Component {

    constructor(props){
        super(props)
        this.state={
            curValue:'',
            todos:[]
        }
    }
    addTodo=(event)=>{
        const newState=this.state.todos
        newState.push(this.state.curValue)
        this.setState({newState,curValue:''})
        
    }
    handlekeydown=(e)=>{
        if(e.key==='Enter'){
            this.addTodo(e)
        }
    }

    

    render() {
        return (
            <div>
                
                    <ul>
                       { this.state.todos.map((todo,index)=>{
                            return <>
                            <li>{todo}</li>
                            {this.state.todos.length>0?<button onClick={()=>{
                                
                            }}> Remove Item</button>:null}
                            </>
                            })
                            
                        }
                        
                    </ul>
                
                New todo name <input name="todoname" value={this.state.curValue} type="text" onKeyDown={(e)=>this.handlekeydown(e)} onChange={(event)=>{
                    this.setState({curValue:event.target.value})
                    // console.log("cur value",event.target.value)
                   
                }}/>
                <button onClick={()=>this.addTodo()}>Add Todo</button>

            </div>
        )
    }
}

