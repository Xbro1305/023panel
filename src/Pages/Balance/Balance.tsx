import { FaPause, FaPeopleCarry, FaPlay, FaUser } from "react-icons/fa";
import styles from "./Balance.module.scss";
import { SiTether } from "react-icons/si";
import { NumericFormat } from "react-number-format";
import { HiUsers } from "react-icons/hi";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { RouterPaths } from "../../App";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Balance = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const rows = [
    {
      amount: 2000,
      usdt: 25.0,
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      created: "18.05.2025 23:20",
      payed: "23.05.2025 10:26",
    },
    {
      amount: 2000,
      usdt: 25.0,
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      created: "18.05.2025 23:20",
      payed: null,
    },
    {
      amount: 2000,
      usdt: 25.0,
      id: "aac240bf-c8c6-4f50-ac27-f9b06c2e9863",
      created: "18.05.2025 23:20",
      payed: "23.05.2025 10:26",
    },
  ];
  return (
    <div className={styles.balance}>
      <div className={styles.balance_top}>
        <h1 className="h1_medium">Баланс</h1>
        {active ? (
          <button
            onClick={() => setActive(false)}
            className="medium button-primary"
          >
            <FaPlay /> Трафик включён
          </button>
        ) : (
          <button
            onClick={() => setActive(true)}
            className="medium button-m-secondary"
          >
            <FaPause /> Трафик выключён
          </button>
        )}
      </div>
      <div className={styles.balance_trader}>
        <div className={styles.balance_trader_block}>
          <span className="medium">Баланс USDT</span>
          <p className="h1_medium">
            <SiTether />{" "}
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={1234.56}
            />
          </p>
        </div>
        <div className={styles.balance_trader_block}>
          <span className="medium">Удержано USDT</span>
          <p className="h1_medium">
            <SiTether />{" "}
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={12345.67}
            />
          </p>
        </div>
      </div>
      <div className={styles.balance_merchant}>
        <div className={styles.balance_trader_block}>
          <span className="medium">Баланс USDT</span>
          <p className="h1_medium">
            <SiTether />{" "}
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={1234.56}
            />
          </p>
        </div>
        <div className={styles.balance_trader_block}>
          <span className="medium">Успешных сделок</span>
          <p className="h1_medium">
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={241}
              style={{ color: "var(--green-primary)" }}
            />
          </p>
        </div>
        <div className={styles.balance_trader_block}>
          <span className="medium">Отмененных сделок</span>
          <p className="h1_medium">
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={3}
              style={{ color: "var(--red-primary)" }}
            />
          </p>
        </div>
        <div className={styles.balance_trader_block}>
          <span className="medium">
            <i>Сделок за сегодня</i> <FaPeopleCarry />
          </span>
          <p className="h1_medium">
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={1234.56}
            />
          </p>
        </div>{" "}
        <div className={styles.balance_trader_block}>
          <span className="medium">
            <i>Активных аккаунтов</i> <FaUser />
          </span>
          <p className="h1_medium">
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={91}
            />
          </p>
        </div>{" "}
        <div className={styles.balance_trader_block}>
          <span className="medium">
            <i>Активных кабинетов</i> <HiUsers />
          </span>
          <p className="h1_medium">
            <NumericFormat
              displayType="text"
              decimalSeparator="."
              thousandSeparator=" "
              value={292}
            />
          </p>
        </div>
      </div>
      <div className={styles.balance_orders}>
        <div className={styles.balance_orders_top}>
          <h1 className="h1_medium">Новые заказы</h1>
          <span className="medium">
            Новые заказы:{" "}
            <NumericFormat
              value={4163}
              decimalSeparator="."
              thousandSeparator=" "
              style={{ color: "var(--text-primary)" }}
              displayType="text"
            />
          </span>
        </div>
      </div>
      <div className={styles.balance_table_container}>
        <table className={styles.balance_table}>
          <thead>
            <tr>
              <td className="caption_regular">Сумма</td>
              <td className="caption_regular">Сумма в USDT</td>
              <td className="caption_regular">Идентификатор сделки</td>
              <td className="caption_regular">Время создания</td>
              <td className="caption_regular">Время оплаты</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => navigate(RouterPaths.merchantAppeals + "20")}
              >
                <td className="regular">{row.amount}</td>
                <td className="regular">{row.usdt}</td>
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
                    }}
                  >
                    <IoCopy />
                    {row.id}
                  </span>
                </td>
                <td className="regular">{row.created}</td>
                <td className="regular">
                  {row.payed == null && (
                    <span
                      style={{
                        color: "var(--red-primary)",
                        background: "var(--red-secondary)",
                      }}
                    >
                      &times; Не оплачен
                    </span>
                  )}
                  {row.payed && <span>{row.payed}</span>}
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};
