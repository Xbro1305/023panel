import { useNavigate } from "react-router-dom";
import styles from "./Banks.module.scss";
import { RouterPaths } from "../../App";

export const Banks = () => {
  const rows = [
    {
      title: "СБЕР (СБП)",
      phone: "900",
      id: 1,
    },
    {
      title: "СБЕР (КАРТА)",
      phone: "900",
      id: 2,
    },
    {
      title: "СБЕР (СБП)",
      phone: "900",
      id: 3,
    },
    {
      title: "СБЕР (КАРТА)",
      phone: "900",
      id: 4,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className={styles.banks}>
      <div className={styles.banks_top}>
        <h1 className="h1_medium">Банки</h1>

        <span className="regular" style={{ color: "var(--text-secondary)" }}>
          Банков:
          <p className="medium">2</p>
        </span>
      </div>

      <div className={styles.banks_table_container}>
        <table className={styles.banks_table}>
          <thead>
            <tr>
              <td className="caption_regular" style={{ width: "100%" }}>
                Название банка
              </td>
              <td className="caption_regular">Номер телефона банка</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} onClick={() => navigate(RouterPaths.banks + "1")}>
                <td
                  style={{ color: "var(--blue-primary)" }}
                  className="regular"
                >
                  {row.title}
                </td>
                <td className="regular">{row.phone}</td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};
