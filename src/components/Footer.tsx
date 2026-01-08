'use client'

import Image from "next/image";
import logo from '@/assets/images/logo.webp'
import styles from "./Footer.module.css";

export default function Footer() {
    const handleCallClick = () => {
        window.location.href = 'tel:+917838910981';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:info@career-laksh.com';
    };

    const handleMapClick = () => {
        window.open('https://maps.google.com/?q=Delhi,India', '_blank');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.container}>

                    {/* ABOUT */}
                    <div>
                        <h3 className={styles.logo}>
                            <Image src={logo} alt="logo"/>
                        </h3>
                        <p>
                            Career Laksh is a leading education consulting platform helping
                            students make informed decisions about their education and careers.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#whyus">Why Us</a></li>
                            <li><a href="#colleges">Colleges</a></li>
                            <li><a href="#fees">Fees</a></li>
                            <li><a href="#getIntouch">Contact</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4>Get In Touch</h4>
                        <p 
                            onClick={handleCallClick}
                            style={{ cursor: 'pointer' }}
                            title="Call us"
                        >
                            📞 +91 7838910981
                        </p>
                        <p 
                            onClick={handleEmailClick}
                            style={{ cursor: 'pointer' }}
                            title="Email us"
                        >
                            ✉️ info@career-laksh.com
                        </p>
                        <p 
                            onClick={handleMapClick}
                            style={{ cursor: 'pointer' }}
                            title="View on map"
                        >
                            📍 Delhi
                        </p>
                    </div>

                    {/* GOOGLE MAP */}
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796879427!2d77.04417!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Career Laksh Location"
                        />
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className={styles.bottom}>
                © Career-Laksh.com 2025 | All rights reserved.
            </div>
        </footer>
    );
}