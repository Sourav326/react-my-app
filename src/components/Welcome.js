import { useState } from "react";
const Welcome = (props) => {
    const[count,setCount] = useState(0)
    return(
        <div>
            <h1>Hi {props.name}, I am a welcome component</h1>
            <h2>Welcome to {props.batch} course at {props.organization}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    ) 
}

export default Welcome;