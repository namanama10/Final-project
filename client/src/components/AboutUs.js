import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const AboutUs = () => {
  return (
    <>
        <div className="container">
            <div className="tamplate_aboutus">
                <div className="aboutus-section">
                    <h5>Tentang Kami</h5>
                    <p>RENDY (rental andy) menyediakan jasa rental mobil & motor untuk anda di daerah Jakarta dan sekitarnya. Kondisi kendaraan yang prima, bersih & harga terjangkau adalah moto pelayanan kami.</p>
                </div>
                <div className="aboutus-section">
                    <h5><MdLocationOn></MdLocationOn>  Lokasi</h5>
                    <p>jl. raya regensi  kec.priuk, kel.priuk, Kota TANGERANG,BANTEN. 15131, INDONESIA</p>
                </div>
                <div className="aboutus-section">
                    <h5>Kontak kami</h5>
                    <p><MdCall></MdCall>  (+62) 8210987654</p>
                    <p><ImWhatsapp></ImWhatsapp>  (+62) 8771234568</p>
                    <h5>Jam Operasional</h5>
                    <p>24 jam / senin - minggu (buka)</p>
                </div>
                <div className="aboutus-section">
                    <h5>Follow Us</h5>
                    <p><ImFacebook></ImFacebook></p>
                    <p><ImTwitter></ImTwitter></p>
                    <p><GrInstagram></GrInstagram></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs