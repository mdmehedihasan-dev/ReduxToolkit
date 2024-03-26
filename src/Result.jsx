import { useSelector } from "react-redux"


const Result = () => {
    let data = useSelector((state)=>state.counter.value)
  return (
    <div>
        <h1 className="my-5 font-sans font-bold text-xl">{data}</h1>
    </div>
  )
}

export default Result