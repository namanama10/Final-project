import React from 'react'
import Logo24jam from '../images/24jam.png'
import LogoMurah from '../images/hargaMurah.png'
import LogoBersih from '../images/mobilBersih.png'

const PilihKami = () => {
  return (
    <>
    <div className='container'>
        <div className='header-PilihKami'>
            <h5><b>MENGAPA MEMILIH KAMI ?</b></h5>
            <br></br>
        </div>
        <div className='tamplate_PilihKami'>
            <div className='PilihKami-section'>
                <img src={Logo24jam} className='imgPilihKami'/>
                <br></br>
                <center><h5>Pelayanan 24 Jam</h5></center>
                <center><p>Keramahan dan kesiagaan 24 jam untuk berbagai pertanyaan tentang sewa kendaraan, kami siap untuk melayani anda </p></center>
            </div>
            <div className='PilihKami-section'>
                <img src={LogoBersih} className='imgPilihKami'/>
                <br></br>
                <center><h5>Kendaraan Aman & Nyaman</h5></center>
                <center><p>Kami menjaga kondisi kendaraan agar selalu berfungsi dengan baik, kondisi yang bersih, AC normal, dan bebas bau rokok.</p></center>
            </div>
            <div className='PilihKami-section'>
                <img src={LogoMurah} className='imgPilihKami'/>
                <br></br>
                <center><h5>Harga Hemat</h5></center>
                <center><p>Harga kami sangat terjangkau dan bisa mendapatkan penawaran harga lebih murah untuk sewa mobil beberapa hari.</p></center>
            </div>
        </div>
    </div>
    </>
  )
}

export default PilihKami