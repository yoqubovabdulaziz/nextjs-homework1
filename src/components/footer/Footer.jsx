import React from 'react'
import "./Footer.scss"

import footerLogo from "@/assets/footer-logo.png"
import footerWhatsapp from "@/assets/footer-whatsapp.png"
import footerInsta from "@/assets/footer-insta.png"
import footerTiktok from "@/assets/footer-tiktok.png"

import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className="container footer">
                <div className="footer1">
                    <Image src={footerLogo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footer1">
                    <h3>Contact us</h3>
                    <p>E: info@example.com</p>
                    <p>P: +94 7670000000</p>
                    <p>A: 123 Hospital rd,</p>
                    <p>Kalubowila Dehiwela</p>
                </div>
                <div className="footer1">
                    <h3>Useful links</h3>
                    <p>Shop All </p>
                    <p>Tempered Glass</p>
                    <p>Back-cover</p>
                    <p>About Us</p>
                </div>
                <div className="footer1">
                    <div className="footer-network">
                        <Image src={footerWhatsapp} />
                        <p>Whatsapp</p>
                    </div>
                    <div className="footer-network">
                        <Image src={footerInsta} />
                        <p>Facebook</p>
                    </div>
                    <div className="footer-network">
                        <Image src={footerInsta} />
                        <p>Instargram</p>
                    </div>
                    <div className="footer-network">
                        <Image src={footerTiktok} />
                        <p>Tik Tok</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer