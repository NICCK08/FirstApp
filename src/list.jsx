import { useState } from "react";
const List = () => {
  let [users, setUser] = useState([
    {
      id: 101,
      name: "Nikhil",
      age: "23",
      role: "Software Engineer",
    },
    {
      id: 102,
      name: "Shah Rukh Khan",
      age: "57",
      role: "Actor",
    },
    {
      id: 103,
      name: "Eren Yeager",
      age: "19",
      role: "Protagonist",
    },
  ]);
  let remove = (id) => {
    let result=users.filter((x)=>x.id!==id)
    setUser(result)
    // console.log(id);
  };

  return (
    <div className="list">
      {users.map((data) => {
        return (
          <div className="user">
            <h1>Name: {data.name}</h1>
            <h2>Age: {data.age}</h2>
            <h2>Role: {data.role}</h2>
            <h2>Id: {data.id}</h2>
            <button onClick={() => remove(data.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
export default List;
