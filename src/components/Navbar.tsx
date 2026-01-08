import styles from "./Navbar.module.css";
import logo from '@/assets/images/logo.webp'
import Image from "next/image";

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
        </header>
    );
}
