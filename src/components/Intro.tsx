"use client";

import styles from "./Intro.module.css";
import { FaHandshake, FaGraduationCap, FaUsers } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";

const ICONS = [
  FaHandshake,          // Over 11 Years of Trust
  FaGraduationCap,      // Access to Top Colleges
  FaUsers,              // Personalized Guidance
  FaBullseye,         // Strategic Approach
  MdSupportAgent,       // End-to-End Support
  FaPercentage   // Transparent Process
];


type IntroProps = {
    data: {
        title: string;
        description: string[];
        items?: {
            title: string;
            text: string;
        }[];
    };
};

export default function Intro({ data }: IntroProps) {
    return (
        <section className={styles.intro} id="whyus">
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose <span>Career Laksh</span></h2>

                <div className={styles.content}>
                    {data.description.map((text, index) => (
                        <p key={index} className={styles.paragraph}>
                            {text}
                        </p>
                    ))}
                </div>

                {data.items && (
                    <div className={styles.grid}>
                        {data.items.map((item, index) => {
                            const Icon = ICONS[index];

                            return <div key={index} className={styles.card}>
                                {/* <div className={styles.icon}>ICON</div> */}
                                <div className={styles.icon}>
        <Icon size={34} />
      </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
})}
                    </div>
                )}
            </div>
        </section>
    );
}
