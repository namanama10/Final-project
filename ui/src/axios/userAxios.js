import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/users'

const getAllUsers = async (cb) => {
    try{
        let users = await axios({
            method: 'GET',
            url: URL
        })
        cb(users.data)
    } catch (e) {
        console.log(e)
    }
}


const editUser = async (id, user) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: user
        })
        Swal.fire(
            'Edit user ' + id,
            'user' + id + ' has been updated',
            'success'
        )

        console.log(result.data)
    } catch (e){
        console.log(e)
    }
}


const accountUser = async (id, cb) => {
    try{
        let result = await axios({
            method: "GET",
            url: URL + '/account/' + id
        })

        cb(result.data)
    }catch(e) {
        console.log(e)
    }
}


export {
    getAllUsers,
    editUser,
    accountUser
}

//routing di front end ini berbeda dengan route di backend.