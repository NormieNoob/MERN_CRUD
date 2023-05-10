import axios from 'axios'

const URL = 'http://192.168.1.201:5000'

export const addUser = async (data) => {
    let response;
    try{
        response = (await axios.post(`${URL}/add`, data)).data
    }catch(error){
        response = error.message
        console.log("Error while calling add user Api")
    }
    return response
}

export const getUsers = async () => {
    let response;
    try {
        response = await axios.get(`${URL}/all`)
    } catch (error) {
        response = error
        console.log("Error while calling all user Api")
    }
    return response
}

export const getUser = async (id) => {

    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        return error.message
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        
    }
}