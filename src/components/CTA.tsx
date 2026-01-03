import styles from "./CTA.module.css";

type CTAProps = {
    heading: string;
    text: string;
    buttonText: string;
};

export default function CTA({ heading, text, buttonText }: CTAProps) {
    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.text}>{text}</p>
                <button className={styles.button}>{buttonText}</button>
            </div>
        </section>
    );
}
