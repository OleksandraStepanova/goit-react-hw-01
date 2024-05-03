
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.title}>
                <tr>
                    <th className={css.name}>Type</th>
                    <th className={css.name}>Amount</th>
                    <th className={css.name}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                        <td className={css.value}>{item.type}</td>
                        <td className={css.value}>{item.amount}</td>
                        <td className={css.value}>{item.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}