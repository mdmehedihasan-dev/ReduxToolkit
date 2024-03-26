import { useDispatch } from "react-redux"
import { decrement, division, increment, multiplication } from "./slices/counterSlice"
import { useState } from "react"

const InputBox = () => {
    let dispatch = useDispatch()
    const [input,setInput] = useState()
    const handleSubmit = (e)=>{
        setInput(e.target.value)
      
    }
  return (
    <div>
             <div>
             <input className="outline-double my-5" type="text" onChange={handleSubmit} />
             </div>
       <div className="space-x-2 text-white font-bold">
       <button className="px-4 py-2 bg-green-400 rounded-md" onClick={()=>dispatch(increment(+input))}>Increment</button>
        <button className="px-4 py-2 bg-red-400 rounded-md" onClick={()=>dispatch(decrement(+input))}>decrement</button>
        <button className="px-4 py-2 bg-blue-400 rounded-md" onClick={()=>dispatch(multiplication(+input))}>multiplication</button>
        <button className="px-4 py-2 bg-red-800 rounded-md" onClick={()=>dispatch(division(+input))}>division</button>
       </div>

    </div>
  )
}

export default InputBox