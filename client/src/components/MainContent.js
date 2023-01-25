import React, { useEffect, useState } from 'react'
import { getAllItems } from '../axios/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsWhatsapp } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { BsArrowRight } from "react-icons/bs";
import GambarLogo from '../images/rendyLogo.jpg'

const MainContent = () => {
  const [items, setItems] = useState([])
// function App() {
 useEffect(() => {
  getAllItems(result => setItems(result))
 }, [])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const ListKendaraan = () => {
  return items.map((item) => {
    const { id, gambar, nama, type_kendaraan, type_transmisi, warna, kapasitas_kendaraan } = item
    return (
        <div className='List-wrapper' key={id}>
          <img className='List-image' src={gambar}/>
          <div className='List-nama'>{nama}</div>
          <div className='List-type_kendaraan'>{type_kendaraan}</div>
          <div className='List-type_transmisi'>Transmisi = {type_transmisi}</div>
          <div className='List-warna'>Warna = {warna}</div>
          <div className='List-kapasitas'>Kapasitas kendaraan = {kapasitas_kendaraan}</div>
          <hr/>
          <Button className='buttonInfo' variant="primary" onClick={handleShow}>
        Selengkapnya <BsArrowRight></BsArrowRight>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pesan Sekarang</Modal.Title>
        </Modal.Header>
        <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
        <Modal.Footer>
          <div className='badgeWa'>
          <h4>
           <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
         </h4>
         </div>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </div>
    )
  })
}

  return (
    <>
    <div className='container'>
      <div className='header-sewaKendaraan'>
        <img src={GambarLogo} alt='' className='gambarLogo'/>
        <h5>RENTAL MOBIL ANDY</h5>
        <p>memberikan kenyamanan perjalanan Anda. Tersedia berbagai tipe kendaraan dan paket yang terjangkau.</p>
      </div>
      <hr/>
      <div className='judul_list_kendaraan'>
        <h5>Pilih Mobil Favorit Anda</h5>
        <hr/>
      </div>
      <div className='List-kendaraan'>
        <ListKendaraan></ListKendaraan>
      </div>
    </div>
    </>
  )
}

export default MainContent