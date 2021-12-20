import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:2000';

export const getUsers = async () => {
    
    return await axios.get(`${usersUrl}/list`);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }



// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }