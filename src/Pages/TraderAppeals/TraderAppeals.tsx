import styles from "./TraderAppeals.module.scss";
import check from "../../assets/appeals_check.png";
import { toast } from "react-toastify";
import { IoCopy } from "react-icons/io5";
import { RouterPaths } from "../../App";
import { useNavigate } from "react-router-dom";

export const TraderAppeals = () => {
  const navigate = useNavigate();
  const rows = [
    {
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      amount: 2000,
      createdAt: "18.05.2025 23:20",
      updatedAt: "18.05.2025 23:20",
      status: "processed",
    },
    {
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      amount: 2000,
      createdAt: "18.05.2025 23:20",
      updatedAt: "18.05.2025 23:20",
      status: "closed",
    },
    {
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      amount: 2000,
      createdAt: "18.05.2025 23:20",
      updatedAt: "18.05.2025 23:20",
      status: "open",
    },
  ];
  return (
    <div className={styles.appeals}>
      <section className={styles.appeals_top}>
        <h1 className="h1_medium">Апелляции</h1>
        <section>
          <p className="regular" style={{ color: "var(--text-secondary)" }}>
            Апелляций: <span className="medium"> 4 163</span>
          </p>
        </section>
      </section>

      <div className={styles.appeals_table_container}>
        <table className={styles.appeals_table}>
          <thead>
            <tr>
              <td className="caption_regular">Order ID</td>
              <td className="caption_regular">Сумма</td>
              <td className="caption_regular">Время создания</td>
              <td className="caption_regular">Время закрытия</td>
              <td className="caption_regular">Статус</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => navigate(RouterPaths.traderAppeals + "20")}
              >
                <td
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(row.id);
                    toast.success("Скопировано!");
                  }}
                  className="regular"
                  style={{ justifyContent: "flex-start", textAlign: "left" }}
                >
                  <span
                    style={{
                      justifyContent: "flex-start",
                      textAlign: "left",
                      margin: "0",
                      color: "var(--blue-primary)",
                    }}
                  >
                    <IoCopy />
                    {row.id}
                  </span>
                </td>
                <td className="regular">{row.amount}</td>
                <td className="regular">{row.createdAt}</td>
                <td className="regular">{row.updatedAt}</td>
                <td className="regular">
                  {row.status === "processed" && (
                    <span
                      style={{
                        color: "var(--green-primary)",
                        background: "var(--green-secondary)",
                      }}
                    >
                      <img src={check} alt="" />
                      Обработана
                    </span>
                  )}
                  {row.status === "closed" && (
                    <span
                      style={{
                        color: "var(--red-primary)",
                        background: "var(--red-secondary)",
                      }}
                    >
                      &times; Закрыта
                    </span>
                  )}
                  {row.status === "open" && (
                    <span
                      style={{
                        color: "var(--blue-primary)",
                        background: "var(--blue-secondary)",
                      }}
                    >
                      ! Открыта
                    </span>
                  )}
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};
