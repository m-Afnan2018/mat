"use client";

import { useState } from "react";
import styles from "./LeadForm.module.css";

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

// type Field = {
//     name: string;
//     type: "text" | "email" | "tel" | "select" | "radio" | "checkbox";
//     required?: boolean;
//     options?: FieldOption[];
// };

// type LeadFormProps = {
//     data: {
//         title: string;
//         submitText: string;
//         fields: Field[];
//     };
// };

export default function LeadForm({ data }: LeadFormProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [form, setForm] = useState<Record<string, any>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        name: string,
        value: string | string[],
        type: string
    ) => {
        if (type === "checkbox") {
            setForm((prev) => {
                const current = prev[name] || [];
                return {
                    ...prev,
                    [name]: current.includes(value)
                        ? current.filter((v: string) => v !== value)
                        : [...current, value],
                };
            });
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic required validation
        for (const field of data.fields) {
            if (field.required && !form[field.name]) {
                alert(`Please fill ${field.name}`);
                return;
            }
        }

        // TODO: API call here
        console.log("FORM DATA:", form);

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className={styles.wrapper} id="getIntouch">
                <div className={styles.container}>
                    <h2 className={styles.successTitle}>Thank you!</h2>
                    <p className={styles.successText}>
                        Our counsellor will contact you shortly.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.texts}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <h3 className={styles.description}>Connect with the Career Laksh team
                        and start your MBA admission
                        journey today.</h3>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {data.fields.map((field) => (
                        <div key={field.name} className={styles.field}>
                            {field.type !== "checkbox" && field.type !== "radio" && (
                                <label className={styles.label}>
                                    {field.name.replace(/([A-Z])/g, " $1")}
                                </label>
                            )}

                            {/* INPUTS */}
                            {["text", "email", "tel"].includes(field.type) && (
                                <input
                                    type={field.type}
                                    required={field.required}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value, field.type)
                                    }
                                />
                            )}

                            {field.type === "select" && (
                                <select
                                    required={field.required}
                                    onChange={(e) =>
                                        handleChange(field.name, e.target.value, field.type)
                                    }
                                >
                                    <option value="">Select</option>
                                    {field.options?.map((opt) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            )}

                            {(field.type === "radio" || field.type === "checkbox") && (
                                <div className={styles.optionGroup}>
                                    {field.options?.map((opt) => (
                                        <label key={opt} className={styles.option}>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={opt}
                                                onChange={() =>
                                                    handleChange(field.name, opt, field.type)
                                                }
                                            />
                                            <span>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <button type="submit" className={styles.submit}>
                        {data.submitText}
                    </button>
                </form>
            </div>
        </section>
    );
}
