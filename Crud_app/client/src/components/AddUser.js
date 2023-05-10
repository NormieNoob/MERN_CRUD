import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled, Alert  } from "@mui/material"
import { useState } from "react"
import {addUser} from "../service/api.js"
import {useNavigate} from 'react-router-dom'

const Container = styled(FormGroup)`
 width: 50%;
 margin: 5% auto 0 auto;
 & > div {
    margin-top:20px;
 }`

 const defaultValue = {}

const Adduser= () => {
    const navigate = new useNavigate();

    const onValueChange = (e) => {
        setuser({...user,[e.target.name]:e.target.value})
    }

    const [user, setuser] = useState(defaultValue)

    const addUserDetails = async () => {
        let user = {
            "firstName":document.getElementsByName('firstName')[0].value,
            "lastName":document.getElementsByName('lastName')[0].value,
            "email":document.getElementsByName('email')[0].value,
        }
        let response = await addUser(user);
        navigate('/users')
    }

    return (
        <Container>
            <Typography variant="h4">AddUser</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input name="firstName" onChange={(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input name="lastName" onChange={(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name="email" onChange={(e) => onValueChange(e)}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )
}
 export default Adduser