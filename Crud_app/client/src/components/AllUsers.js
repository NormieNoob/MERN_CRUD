import React from 'react'
import { useEffect, useState } from "react"
import { Table, TableBody, TableHead, TableRow, TableCell, styled, Button } from '@mui/material'
import {getUsers, deleteUser} from '../service/api.js'
import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
width: 60%;
margin: 50px auto 0 auto;
`

const Thead = styled(TableRow)`
background:#000000;
& > th {
  color:#fff;
  font-size:20px;
}
`

const Tbody = styled(TableRow)`
& > td {
  font-size:17px
}`

function AllUsers() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data)
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Sl No</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map((user, index) => (
            <Tbody key={user._id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{user.firstName} {user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                  <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant='contained' color='secondary' onClick={() => deleteUserData(user._id)}>Delete</Button>
              </TableCell>
            </Tbody>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers
