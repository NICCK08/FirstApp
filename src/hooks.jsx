import { useState } from "react";
const Hooks = () => {
    let [value,setvalue]=useState(0);
    let increase=()=>{
        setvalue(value+1);
    }
    let decrease=()=>{
        setvalue(value-1);
    }
    let reset=()=>{
        setvalue(value=0)
    }
    return (  
        <div className="hooks">
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Hooks;