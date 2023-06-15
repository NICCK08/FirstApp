let fetchData= async()=>{
    let response= await fetch('https://jsonplaceholder.typicode.com/users')
    let data=await response.json()
    data.map((x)=>{
        console.log(x.name);
    })
    // console.log(data);
}
 fetchData()