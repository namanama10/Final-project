import React, {useState, useEffect} from 'react'
import { accountBrand, editBrand } from '../../axios/brandAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBrand = () => {
  const [form, setForm] = useState({
    nama: "",
    country: "",
    gambar: "http://via.placeholder.com/100"
  })

  const navigation = useNavigate()
  const params = useParams()

  const getBrandInfo = () => {
    const { id } = params
    accountBrand(+id, result => {
        setForm({
            nama: result.nama,
            country: result.country,
            gambar: result.gambar
        })
        console.log(result)
    })
  }

  useEffect(() => {
    getBrandInfo()
  }, [])


  const submitHandler = () => {
    editBrand(+params.id,form)
    navigation('/brands')
  }

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
        <h5>Edit Item</h5>
      </div>
      <div className='w-75 mx-auto'>
        <div className='mb-3'>
          <label>Nama: </label>
          <input
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Country: </label>
          <input
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Gambar: </label>
          <input
          value={form.gambar}
          onChange={(e) => setForm({ ...form, gambar: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Submit</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default EditBrand