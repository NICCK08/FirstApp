import { useRef } from "react";

const Ref = () => {
    let title=useRef("")
    let text=useRef(null)
    console.log(title.current);
    let submit=()=>{
        // title.current.value=text
        console.log(text.current.value)
    }
  return (
    <div className="ref">
      <h1 ref={title}>UseRef Hook</h1>
      <input ref={text} type="text" />
      <button onClick={submit}>Submit</button> 
    </div>
  );
};

export default Ref;
