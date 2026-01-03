import styles from "./Stats.module.css";

type StatItem = {
    label: string;
    value: string;
};

type StatsProps = {
    items: StatItem[];
};

export default function Stats({ items }: StatsProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.value}>{item.value}</div>
                            <div className={styles.label}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
