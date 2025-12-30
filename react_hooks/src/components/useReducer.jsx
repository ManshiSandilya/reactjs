import { useReducer } from "react";
function USEREDUCER(){
const reducer=(state,action)=>{
    switch(action.type){
    case "INCREAMENT": return{count:state.count+1}
    case "DECREAMENT": return{count:state.count>0?state.count-1:0} 
    case "RESET":return {count:0}
    case "SET":return{count:state.count+action.payload}
}
}
const [state,dispatch]=useReducer(reducer,{count:1})
return(<>
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type:"INCREAMENT"})}>INCREMENT</button>
<button onClick={()=>dispatch({type:"DECREAMENT"})}>DECREAMENT</button>
<button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
<button onClick={()=>dispatch({type:"SET", payload:5})}>ADD 5</button>
</>)}
export default USEREDUCER