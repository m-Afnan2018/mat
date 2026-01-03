import Image from "next/image";
import girl from '@/assets/images/girl.png'
import styles from "./JourneyCTA.module.css";

export default function JourneyCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT CONTENT */}
                <div className={styles.left}>
                    <h2>
                        Ready to Start Your <br />
                        <span>MBA / PGDM</span> Journey?
                    </h2>

                    <p>
                        Our expert counsellors will guide you at every step — from college
                        selection to admission assistance. Let’s make your management
                        career dream a reality.
                    </p>
                </div>

                {/* RIGHT IMAGE PLACEHOLDER */}
                <div className={styles.right}>
                    <Image src={girl} alt="graduatingGirl"/>
                    {/* <div className={styles.imagePlaceholder}>
                        IMAGE
                    </div> */}
                </div>

            </div>
        </section>
    );
}
