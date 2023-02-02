import React from 'react'
import TentangKami1 from '../images/tentang kami_1.jpg'
import TentangKami2 from '../images/rendy_5.JPG'

const TentangKami = () => {
  return (
    <>
      <div className='header-TentangKami'>
        <img src={TentangKami1} className='imgTentangKami1'/>   
        <div className="kolom">
          <h1>Solusi Transportasi Terbaik di Segala Situasi</h1>
        </div>
      </div>
      {/* <div className='container'> */}
      <div className='header-TentangKami2'>  
        <div className="kolom">
          <h2>Tentang RENDY</h2>    
          <p> RENDY memberikan pengalaman terbaik melalui solusi transportasi yang menyeluruh, mulai dari rental mobil, sewa motor, hingga layanan pengemudi profesional. Sejalan dengan pergantian zaman, kami memahami masyarakat memiliki tingkat mobilitas yang terus meningkat dan kebutuhan yang berbeda-beda. Menjawab semua itu, RENDY terus berinovasi memberikan beragam layanan solusi transportasi komprehensif yang mengedepankan efisiensi keamanan dan kenyamanan untuk segala kebutuhan Anda. </p>
          <br></br>
          <p>Dengan seluruh layanan yang kami tawarkan, kami meyakini bahwa RENDY dapat menjadi mitra perjalanan terbaik Anda yang dapat diandalkan dalam segala situasi.</p>
        </div>
        <img src={TentangKami2} className='imgTentangKami2'/> 
      </div>
      {/* </div> */}
    </>
    
  )
}

export default TentangKami