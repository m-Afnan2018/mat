import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* LEFT CONTENT */}
                <div className={styles.left}>
                    <h1>
                        Study <span>MBA / PGDM</span>
                        <br />
                        India & Abroad
                    </h1>

                    <p className={styles.sub}>
                        AICTE Approved Colleges
                    </p>

                    {/* LOGO PLACEHOLDERS */}
                    <div className={styles.logos}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className={styles.logoPlaceholder}>
                                Logo
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className={styles.right}>
                    <div className={styles.formCard}>
                        <h3>Book Admission Counselling</h3>

                        <input placeholder="Enter Your Name" />
                        <input placeholder="10-Digit Mobile Number" />
                        <input placeholder="Enter Your Email" />

                        <div className={styles.row}>
                            <input placeholder="Current Qualification" />
                            <input placeholder="Desired Course" />
                        </div>

                        <input placeholder="Preferred City" />

                        <button>Talk To An Expert</button>
                    </div>
                </div>

            </div>
        </section>
    );
}
