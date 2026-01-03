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
                    <a href="#">Home</a>
                    <a href="#">Why Us</a>
                    <a href="#">Colleges</a>
                    <a href="#">Fees</a>
                    <a href="#">Contact</a>
                </nav>

                {/* CTA */}
                <button className={styles.cta}>Get Free Counselling</button>
            </div>
        </header>
    );
}
