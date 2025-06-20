import { FaPause, FaPeopleCarry, FaPlay, FaUser } from "react-icons/fa";
import styles from "./Balance.module.scss";
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
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_572)">
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="#26A17B"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4415 13.0373V13.0358C13.359 13.0418 12.9337 13.0673 11.985 13.0673C11.2275 13.0673 10.6942 13.0448 10.5067 13.0358V13.038C7.59073 12.9098 5.41423 12.402 5.41423 11.7945C5.41423 11.1878 7.59073 10.68 10.5067 10.5495V12.5325C10.6972 12.546 11.2432 12.5783 11.9977 12.5783C12.903 12.5783 13.3567 12.5408 13.4415 12.5333V10.551C16.3515 10.6808 18.5227 11.1885 18.5227 11.7945C18.5227 12.402 16.3515 12.9083 13.4415 13.0373ZM13.4415 10.3448V8.57026H17.502V5.86426H6.44623V8.57026H10.5067V10.344C7.20673 10.4955 4.72498 11.1495 4.72498 11.9325C4.72498 12.7155 7.20673 13.3688 10.5067 13.521V19.2075H13.4415V13.5195C16.7362 13.368 19.212 12.7148 19.212 11.9325C19.212 11.1503 16.7362 10.497 13.4415 10.3448Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3_572">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
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
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_572)">
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="#26A17B"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4415 13.0373V13.0358C13.359 13.0418 12.9337 13.0673 11.985 13.0673C11.2275 13.0673 10.6942 13.0448 10.5067 13.0358V13.038C7.59073 12.9098 5.41423 12.402 5.41423 11.7945C5.41423 11.1878 7.59073 10.68 10.5067 10.5495V12.5325C10.6972 12.546 11.2432 12.5783 11.9977 12.5783C12.903 12.5783 13.3567 12.5408 13.4415 12.5333V10.551C16.3515 10.6808 18.5227 11.1885 18.5227 11.7945C18.5227 12.402 16.3515 12.9083 13.4415 13.0373ZM13.4415 10.3448V8.57026H17.502V5.86426H6.44623V8.57026H10.5067V10.344C7.20673 10.4955 4.72498 11.1495 4.72498 11.9325C4.72498 12.7155 7.20673 13.3688 10.5067 13.521V19.2075H13.4415V13.5195C16.7362 13.368 19.212 12.7148 19.212 11.9325C19.212 11.1503 16.7362 10.497 13.4415 10.3448Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3_572">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
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
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_572)">
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="#26A17B"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4415 13.0373V13.0358C13.359 13.0418 12.9337 13.0673 11.985 13.0673C11.2275 13.0673 10.6942 13.0448 10.5067 13.0358V13.038C7.59073 12.9098 5.41423 12.402 5.41423 11.7945C5.41423 11.1878 7.59073 10.68 10.5067 10.5495V12.5325C10.6972 12.546 11.2432 12.5783 11.9977 12.5783C12.903 12.5783 13.3567 12.5408 13.4415 12.5333V10.551C16.3515 10.6808 18.5227 11.1885 18.5227 11.7945C18.5227 12.402 16.3515 12.9083 13.4415 13.0373ZM13.4415 10.3448V8.57026H17.502V5.86426H6.44623V8.57026H10.5067V10.344C7.20673 10.4955 4.72498 11.1495 4.72498 11.9325C4.72498 12.7155 7.20673 13.3688 10.5067 13.521V19.2075H13.4415V13.5195C16.7362 13.368 19.212 12.7148 19.212 11.9325C19.212 11.1503 16.7362 10.497 13.4415 10.3448Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3_572">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
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
