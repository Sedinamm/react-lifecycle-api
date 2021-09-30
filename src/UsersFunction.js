import React, { useEffect, useState } from "react";
import axios from "axios";


function UsersFunction() {
    const [users, setUsers] = useState([]);
  

    async function getUsers() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    
        setUsers(res.data);
}
 useEffect(() => {
    getUsers();
    return () => {
        setUsers([]);
      };
    }, []);
    return (
        <>
          {
            users.map((user) => {
              return (
                  <div key={user.id}>
                      <h2>{user.name}</h2>
                      <h2>{user.username}</h2>
                      <h2>{user.email}</h2>
                  </div>
              )
            })
          }
        </>
      );
}

export default UsersFunction;