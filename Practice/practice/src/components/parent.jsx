import { useState } from "react"

function Parent()
{
    const[list,setList]=useState([])
    const[activity,setActivity]=useState("")
    const handleAdd=()=>{
    setList([...list,activity])}
    const handleDelete=(index)=>{
    setList(list.filter((_,i)=>{i!=index}))
    }
}

}
export default Parent