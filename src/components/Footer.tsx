import Image from "next/image";
import logo from '@/assets/images/logo.webp'
import styles from "./Footer.module.css";

export default function Footer() {
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
                            <li>Home</li>
                            <li>Why Us</li>
                            <li>Colleges</li>
                            <li>Fees</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4>Get In Touch</h4>
                        <p>📞 +91 7875910981</p>
                        <p>✉️ info@career-laksh.com</p>
                        <p>📍 Delhi</p>
                    </div>

                    {/* MAP PLACEHOLDER */}
                    <div className={styles.map}>
                        Map
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
