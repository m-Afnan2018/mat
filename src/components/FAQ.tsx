"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQItem = {
    q: string;
    a: string;
};

type FAQProps = {
    items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!items || items.length === 0) return null;

    const toggle = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>

                <div className={styles.list}>
                    {items.map((item, index) => {
                        const isOpen = index === openIndex;

                        return (
                            <div key={index} className={styles.item}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.q}</span>
                                    <span className={styles.icon}>
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className={styles.answer}>
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
