'use client'

import styles from "./Navbar.module.css";
import logo from '@/assets/images/logo.webp'
import Image from "next/image";
import whatsappImage from '@/assets/images/whatsapp.png'
import callImage from '@/assets/images/call.png'

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                {/* LOGO */}
                <div className={styles.logo}>
                    <Image src={logo} alt='logo' />
                </div>

                {/* NAV LINKS */}
                <nav className={styles.links}>
                    <a href="#home">Home</a>
                    <a href="#whyus">Why Us</a>
                    <a href="#colleges">Colleges</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#faq">FAQ</a>
                    <a href="#getIntouch">Contact</a>
                </nav>

                {/* CTA */}
                <button className={styles.cta}>Get Free Counselling</button>
            </div>
            <div className={styles.phoneCta}>
                <Image className={styles.whatsapp} onClick={()=>window.open('https://wa.me/+917838910981')} src={whatsappImage} alt='whatsapp' />
                <Image className={styles.call} onClick={()=>window.open('tel:917838910981')} src={callImage} alt='call' />
            </div>
        </header>
    );
}
