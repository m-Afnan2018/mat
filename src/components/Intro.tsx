import Image from "next/image";
import logo from '@/assets/images/logo.webp'
import styles from "./Intro.module.css";

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
        <section className={styles.intro}>
            <div className={styles.container}>
                <h2 className={styles.title}>Why Choose <Image src={logo} alt="logo"/></h2>

                <div className={styles.content}>
                    {data.description.map((text, index) => (
                        <p key={index} className={styles.paragraph}>
                            {text}
                        </p>
                    ))}
                </div>

                {data.items && (
                    <div className={styles.grid}>
                        {data.items.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.icon}>ICON</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
