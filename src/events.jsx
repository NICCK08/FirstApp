const Events = () => {
    let submitfn=(x)=>{
        // console.log("Submitted");
        // alert("Danger");
        alert(`hello ${x}` );
    }
    return (  
        <div className="events">
            <button onClick={()=>submitfn("react")}>click</button>
        </div>
    );
}
 
export default Events;