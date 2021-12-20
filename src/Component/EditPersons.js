import React from 'react'
import  { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function EditPersons() {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
      name: "",
      title: "",
     
    });
  
    const { name, title } = user;

    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
        loadUser();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:2000/update/${id}`, user);
      history.push("/dashboard");
    };
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:2000/edit/${id}`);
      setUser(result.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="title"
                value={title}
                onChange={e => onInputChange(e)}
              />
            </div>
          
           
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    );
  };
  

export default EditPersons
