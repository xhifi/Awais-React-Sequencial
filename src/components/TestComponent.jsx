import { useState} from "react"

export default function TestComponent ({initialValue}){
    const [num, setNum] = useState(initialValue || 0);
    const countUp = () => {
        setNum(num + 1);
    }
    
    return (
        <div>
            <button onClick={() => setNum(num - 1)}>-</button> {num} <button onClick={countUp}>+</button>
        </div>
    )
}