import React from 'react'
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Link } from "react-router-dom";

function Dashboard() {

let [users, setUsers]=useState([]);



// useEffect(()=>{
//  axios.get('http://localhost:2000/list').then(res=>{
//      console.log(res);
//      console.log(">>>>" , res.data)
//      setUsers(res.data.notes)
//     })
//     .catch(error=>{
//       console.log('eror')
//     })
// },[]);




useEffect(() => {
  loadUsers();
}, []);

const loadUsers = async () => {
  const result = await axios.get('http://localhost:2000/list');
  console.log(">>>>" , result.data)
  setUsers(result.data.notes)
};


const deleteUser = async id => {
  await axios.delete(`http://localhost:2000/delete/${id}`);
  loadUsers();
};


return (
  <div className="container">
     
  <div className="py-4">
  <Link className="btn btn-outline-dark" to="/users/add">Add User</Link>
    <h1>Home Page</h1>
    
    <table class="table border shadow">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user,key)=>{
return(
      <tr>
                <th >{key+1}</th>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.title}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            )})
      
    }
</tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard

{/* //  console.log("////////////////////////", user);
  //   <h1>{user.name}</h1>
   
  // <h2 key={key}>{user._id}<br></br>{user.name}<br></br> {user.title}</h2>
    
  }
  )
} */}