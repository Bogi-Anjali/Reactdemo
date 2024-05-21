
import React from 'react'
import { useState } from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { styled } from '@mui/system';

const Component = styled(Box)({
    width: '80%',
    margin: '50px',
});


const defaultObj = [{
    id: 111,
    name: 'anjali',
    email: 'anjalivalmiki2001@gmail.com',
    phone: 9876543210,
    salary: 20000,
    age: 22,
}]

const Comps = () => {
    
    const [users, setUsers] = useState(defaultObj);
    
    const removeEntry =(id) => {
       const updatedUsers = users.filter(user => user.id !==id);
        setUsers(updatedUsers);
    }
    return (
        <Component>
            <Typography variant="h6"> User Details </Typography>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "black" }}>
                            <TableCell style={{ color: "white" }}>Id</TableCell>
                            <TableCell style={{ color: "white" }}>Name</TableCell>
                            <TableCell style={{ color: "white" }}>Email</TableCell>
                            <TableCell style={{ color: "white" }}>Phone</TableCell>
                            <TableCell style={{ color: "white" }}>Salary</TableCell>
                            <TableCell style={{ color: "white" }}>Age</TableCell>
                            <TableCell style={{ color: "white" }}>Remove Entry</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.salary}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell><Button variant="contained" color="error" onClick={() => removeEntry(user.id)}> Remove</Button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Box>
        </Component>
    );
}

export default Comps;
