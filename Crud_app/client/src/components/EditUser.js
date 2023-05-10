import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled, Alert  } from "@mui/material"
import { useState, useEffect } from "react"
import {editUser, getUser} from "../service/api.js"
import {useNavigate, useParams} from 'react-router-dom'

const initialValue = {
    firstName: '',
    lastName: '',
    email: ''
}

const Container = styled(FormGroup)`
 width: 50%;
 margin: 5% auto 0 auto;
 & > div {
    margin-top:20px;
 }`

const EditUser= () => {
    const navigate = new useNavigate();
    const {id} = useParams();

    const [user, setUser] = useState({})

    useEffect(()=>{
        loadUserData();
    },[])

    const loadUserData = async () => {
        const response = (await getUser(id)).data
        setUser(response)
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    const editUserDetails = async () => {
        let response = await editUser(user, id);
        navigate('/users')
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
            <InputLabel shrink>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="firstName" value={user.firstName}/>
            </FormControl>
            <FormControl>
            <InputLabel shrink>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lastName" value={user.lastName}/>
            </FormControl>
            <FormControl>
            <InputLabel shrink>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )
}
 export default EditUser