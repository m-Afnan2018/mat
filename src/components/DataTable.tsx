import styles from "./DataTable.module.css";

type TableData = {
    title?: string;
    columns: string[];
    rows: string[][];
};

type DataTableProps = {
    table: TableData;
};

export default function DataTable({ table }: DataTableProps) {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {table.title && (
                    <h2 className={styles.title}>{table.title}</h2>
                )}

                <div className={styles.tableScroll}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {table.columns.map((col, index) => (
                                    <th key={index} scope="col">
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {table.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
