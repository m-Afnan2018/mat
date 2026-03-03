import Image from "next/image";
import girl from '@/assets/images/girl.png'
import styles from "./JourneyCTA.module.css";

export default function JourneyCTA() {
    return (
        <section className={styles.section} id="colleges">
            <div className={styles.container}>

                {/* LEFT CONTENT */}
                <div className={styles.left}>

                    <h2>Courses Offered Through NPAT</h2>
                    <p>
                        NPAT is mainly for admission into NMIMS programs like:<br />
                        🔹 BBA (Bachelor of Business Administration)<br />
                        🔹 B.Com (Hons.)<br />
                        🔹 B.Sc. Finance<br />
                        🔹 BBA Branding & Advertising<br />
                        🔹 BBA International Business<br />
                        🔹 B.Tech (at NMIMS campuses)<br />
                        🔹 B.Des (Design)
                    </p>

                    <h2>Exam Pattern (For BBA / Commerce Programs)</h2><br />
                    ✔ Mode: Online (Computer-Based Test)<br />
                    ✔ Duration: 120 minutes (2 hours)<br />
                    ✔ Sections:<br />
                    Quantitative & Numerical Ability<br />
                    Reasoning & General Intelligence<br />
                    Proficiency in English<br />
                    ✔ Total Questions: ~120<br />
                    ✔ No negative marking (for most programs)

                    <h2>Eligibility For BBA / B.Com:</h2><br />
                    Must have passed 12th standard (any stream)<br />
                    Minimum 50–60% aggregate marks (varies slightly by program)<br />
                    For B.Tech:<br />
                    Must have Physics, Chemistry, Math in 12th<br />
                    Minimum required percentage (usually around 50–60%)

                    {/* <h2>Placement Trend (B.Tech)</h2>
                    <p>
                        High placements: Most campuses see 90%+ students placed annually with strong support from the placement cell. Average packages are generally around ₹8–₹10 LPA. Top packages can go very high, with reports of up to ₹80+ LPA in some years. Top recruiters include companies like Microsoft, Amazon, Cisco, Bosch, SAP Labs, Oracle, VISA, and many others.
                        <br/>
                        Placement stats vary by campus: Coimbatore / Bengaluru: Highest packages ~₹80L, average ~₹9L. Chennai: Highest ~₹56.9L, average ~₹9L.
                    </p>

                    <h2>Eligibility</h2>
                    <p>
                        To get into B.Tech: You must have 10+2 (Physics + Chemistry + Maths) with good marks. You need a competitive rank in either: Amrita Entrance Examination – Engineering (AEEE) or JEE Main Minimum requirements usually include around 60% aggregate marks in PCM (with at least 50% in each subject), but exact cutoffs depend on the year and branch.
                        <br/>
                        📝 How to Apply Register online on the official Amrita admissions portal. Submit AEEE or JEE Main score. Attend counselling based on your rank. Complete document verification & fee payment.
                    </p> */}
                    {/* <h2>
                        Ready to Start Your <br />
                        <span>MBA / PGDM</span> Journey?
                    </h2>

                    <p>
                        Our expert counsellors will guide you at every step — from college
                        selection to admission assistance. Let’s make your management
                        career dream a reality.
                    </p> */}
                </div>

                {/* RIGHT IMAGE PLACEHOLDER */}
                <div className={styles.right}>
                    <Image src={girl} alt="graduatingGirl" />
                    {/* <div className={styles.imagePlaceholder}>
                        IMAGE
                    </div> */}
                </div>

            </div>
        </section>
    );
}
