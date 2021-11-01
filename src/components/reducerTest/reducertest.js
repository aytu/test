import React, { useReducer } from 'react'

function reducer(state,action){
    switch (action.type) {
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default:
            return state;
    }
    
}

export default function Reducertest() {
    const [state, dispatch]=useReducer(reducer,{count:0});
    const increment=()=>{
        dispatch({type:'increment'});
    }
    const decrement=()=>{
        dispatch({type:'decrement'});
    }
    return (
        <div>
            <button className="btn" onClick={decrement}>-</button>
             <span style={{padding:'20px'}}> {state.count} </span>
            <button className="btn" onClick={increment}>+</button>
        </div>
    )
}
