import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000/brands'

const getAllBrands = async (cb) => {
    try{
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        cb(brands.data)
    } catch (e) {
        console.log(e)
    }
}

const addBrand = async (brand) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/create',
            data: brand
        })

        Swal.fire(
            'Add brand',
            'brand has been added',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }
}

const editBrand = async (id, brand) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: brand
        })
        Swal.fire(
            'Edit brand ' + id,
            'brand' + id + ' has been updated',
            'success'
        )

        console.log(result.data)
    } catch (e){
        console.log(e)
    }
}

const deleteBrand = async(id) => {
    try{
        let result = await axios({
            method: "DELETE",
            url: URL + '/delete/' + id
        })
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

        console.log(result)
    } catch(e) {
        console.log(e)
    }
}

const accountBrand = async (id, cb) => {
    try{
        let result = await axios({
            method: "GET",
            url: URL + '/info/' + id
        })

        cb(result.data)
    }catch(e) {
        console.log(e)
    }
}


export {
    getAllBrands,
    addBrand,
    editBrand,
    deleteBrand,
    accountBrand
}

//routing di front end ini berbeda dengan route di backend.