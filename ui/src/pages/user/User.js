import React, {useState, useEffect} from 'react'
import { getAllUsers } from '../../axios/userAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
 

const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    //callback untuk ambil data users dari folder axios
    getAllUsers(result => setUsers(result))
  }, [])

  return (
    <div className='my-3'>
      <div className='w-100 my-3 text-center'>
        <div className='flex'>
          <h3>User</h3>
        </div>
      </div>
      <div className='row my-3 text-center'>
        <div className='col-9 mx-auto'>
          {/* <div className='w-100'>
          <Link to='/users/create' className='btn btn-sm btn-primary my-2'>
              <span className='me-2'>
                <FiPlus></FiPlus>
              </span>
            Add Brand
          </Link>
          </div> */}
          <div className='w-100'>
            <table className='table table-bordered'>
              <thead>
                <tr className='table-primary'>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Kontak</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                  {
                  users.length > 0 ?
                  users.map(user => {
                    const { id, username, email, no_hp, alamat } = user
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{no_hp}</td>
                        <td>{alamat}</td>
                        {/* <td>
                          <Link to={`/users/update/${id}`} className="btn btn-sm btn-info">Edit</Link>
                        </td> */}
                      </tr>
                    )
                  }) : <LoadingBar></LoadingBar>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default User