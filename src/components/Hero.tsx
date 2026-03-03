'use client';

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Form from "./Form";

interface HeroProps {
    data: {
        title: string;
        heading: string;
        subheading: string;
        cta: string;
    },
    formData: LeadFormData;
}

export type Field = {
    name: string;
    type: "text" | "email" | "tel" | "select" | "radio" | "checkbox";
    required?: boolean;
    options?: string[];
};

export type LeadFormData = {
    title: string;
    submitText: string;
    fields: Field[];
};

type LeadFormProps = {
    data: LeadFormData;
};


export default function Hero({ data, formData }: HeroProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError("");

        const form = e.currentTarget; // ✅ typed as HTMLFormElement
        const formData = new FormData(form);

        try {
            const res = await fetch(
                "https://formsubmit.co/ajax/careerlaksh123@gmail.com",
                {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: formData,
                }
            );

            const data = await res.json();

            if (data.success === true) {
                setSuccess(true);
                form.reset(); // ✅ NO TypeScript error
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
            setError("Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        console.log({ success, error })
    }, [success, error])

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.backgroundGradient} />
                {/* LEFT */}
                <div className={styles.left} onClick={() => window.location.href = "https://career-laksh.com/nmims-anil-surendra-school-commerce"}>
                    <h1>{data.title}</h1>
                    {data.heading}
                    <p className={styles.sub}>{data.subheading}</p>
                </div>

                {/* RIGHT FORM */}
                <div className={styles.right}>
                    <div className={styles.formCard}>
                        <h3>Book Admission Counselling</h3>

                        <Form data={formData} />

                        {/* <form onSubmit={handleSubmit}>
                            <input name="name" required placeholder="Enter Your Name" />
                            <input name="phone" required placeholder="10-Digit Mobile Number" />
                            <input name="email" type="email" required placeholder="Enter Your Email" />

                            <div className={styles.row}>
                                <input name="qualification" required placeholder="Current Qualification" />
                                <input name="course" required placeholder="Desired Course" />
                            </div>

                            <input name="city" placeholder="Preferred City" />

                            <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Talk To An Expert"}
                            </button>

                            {success && (
                                <p className={styles.success}>
                                    ✅ Submitted successfully!
                                </p>
                            )}

                            {error && (
                                <p className={styles.error}>
                                    ❌ {error}
                                </p>
                            )}
                        </form> */}
                    </div>
                </div>

            </div>
        </section>
    );
}
