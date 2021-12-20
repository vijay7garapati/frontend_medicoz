import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button,  } from '@material-ui/core'
import { getUsers, deleteUser } from './Service';
import { Link } from 'react-router-dom';



const AllUsers = (props) => {
    const [users, setUsers] = useState([]);
   

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response);
        console.log("///////////////////",response.data);
        setUsers(response.data.notes);
       
        ;
    }

    return (
        <Table >
            <TableHead>
                <TableRow >
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>Action</TableCell>
                  
                </TableRow>
            </TableHead>
            <TableBody>
                {
                users.map((user, key) => (
                    <TableRow  key={key}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.title}</TableCell>
                        
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllUsers;