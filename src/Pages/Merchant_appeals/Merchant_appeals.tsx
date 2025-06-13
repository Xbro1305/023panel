import { FaPlus, FaSearch } from "react-icons/fa";
import styles from "./Merchant_appeals.module.scss";
import check from "../../assets/appeals_check.png";
import { toast } from "react-toastify";
import { IoCopy } from "react-icons/io5";

export const MerchantAppeals = () => {
  return (
    <div className={styles.appeals}>
      <section className={styles.appeals_top}>
        <h1 className="h1_medium">Апелляции</h1>
        <section>
          <p className="regular" style={{ color: "var(--text-secondary)" }}>
            Апелляций: <span className="medium"> 4 163</span>
          </p>
          <button className="button-primary medium">
            <FaPlus />
            {"   "}Добавить апелляцию
          </button>
        </section>
      </section>
      <section className={styles.appeals_search}>
        <input className="medium" type="text" placeholder="Поиск по Order ID" />
        <FaSearch />
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
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--green-primary)",
                    background: "var(--green-secondary)",
                  }}
                >
                  <img src={check} alt="" />
                  Обработана
                </span>
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--red-primary)",
                    background: "var(--red-secondary)",
                  }}
                >
                  &times; Закрыта
                </span>
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--blue-primary)",
                    background: "var(--blue-secondary)",
                  }}
                >
                  ! Открыта
                </span>
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--green-primary)",
                    background: "var(--green-secondary)",
                  }}
                >
                  <img src={check} alt="" />
                  Обработана
                </span>
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--red-primary)",
                    background: "var(--red-secondary)",
                  }}
                >
                  &times; Закрыта
                </span>
              </td>
            </tr>
            <tr>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("");
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
                  aac240bf-c8c6-4f50-ac27-f9b06c2e9863
                </span>
              </td>
              <td className="regular">2000</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular"> 18.05.2025 23:20</td>
              <td className="regular">
                <span
                  style={{
                    color: "var(--blue-primary)",
                    background: "var(--blue-secondary)",
                  }}
                >
                  ! Открыта
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
