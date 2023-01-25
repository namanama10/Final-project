import React, { useState, useEffect } from 'react'
import { getAllBrands, deleteBrand } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ListBrands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    //callback untuk ambil data brands dari folder axios
    getAllBrands(result => setBrands(result))
  }, [])

  const deleteHandler = (id) => {
    deleteBrand(id)
    getAllBrands(result => setBrands(result))
  }


    
  return (
    <>
      <div className='row my-3 text-center'>
        <div className='col-9 mx-auto'>
          <div className='w-100'>
          <Link to='/brands/create' className='btn btn-sm btn-primary my-2'>
              <span className='me-2'>
                <FiPlus></FiPlus>
              </span>
            Add Brand
          </Link>
          </div>
          <div className='w-100'>
            <table className='table table-bordered'>
              <thead>
                <tr className='table-primary'>
                  <th>Id</th>
                  <th>Nama</th>
                  <th>Country</th>
                  <th>Gambar</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                  {
                  brands.length > 0 ?
                  brands.map(brand => {
                    const { id, nama, country, gambar } = brand
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{nama}</td>
                        <td>{country}</td>
                        <td>{gambar}</td>
                        <td>
                          <Link to={`/brands/update/${id}`} className="btn btn-sm btn-info">Edit</Link>
                          <button onClick={() => deleteHandler(id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    )
                  }) : <LoadingBar></LoadingBar>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListBrands