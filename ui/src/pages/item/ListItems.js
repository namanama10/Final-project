import React, { useState, useEffect } from 'react'
import { getAllItems, deleteItem } from '../../axios/itemAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ListItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    //callback untuk ambil data items dari folder axios
    getAllItems(result => setItems(result))
  }, [])

  const deleteHandler = (id) => {
    deleteItem(id)
    getAllItems(result => setItems(result))
  }


    
  return (
    <>
      <div className='row my-3 text-center'>
        <div className='col-12 mx-auto'>
          <div className='w-100'>
          <Link to='/items/create' className='btn btn-sm btn-primary my-2'>
              <span className='me-2'>
                <FiPlus></FiPlus>
              </span>
            Add Item
          </Link>
          </div>
          <div className='w-80'>
            <table className='table table-bordered'>
              <thead>
                <tr className='table-primary'>
                  <th>Id</th>
                  <th>Nama</th>
                  <th>Type Kendaraan</th>
                  <th>Type Transmisi</th>
                  <th>Warna</th>
                  <th>Kapasitas Kendaraan</th>
                  <th>Brand ID</th>
                  <th>User ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                  {
                  items.length > 0 ?
                  items.map(item => {
                    const { id, nama, type_kendaraan, type_transmisi, warna, kapasitas_kendaraan, brandId, userId } = item
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{nama}</td>
                        <td>{type_kendaraan}</td>
                        <td>{type_transmisi}</td>
                        <td>{warna}</td>
                        <td>{kapasitas_kendaraan}</td>
                        <td>{brandId}</td>
                        <td>{userId}</td>
                        <td>
                          <Link to={`/items/update/${id}`} className="btn btn-sm btn-info">Edit</Link>
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

export default ListItems