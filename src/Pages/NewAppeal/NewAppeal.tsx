import { FaCheck, FaChevronRight } from "react-icons/fa";
import styles from "../EditAppeal/EditAppeal.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { RouterPaths } from "../../App";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export const NewAppeal = () => {
  const [sum, setSum] = useState<string>();
  const [file, setFile] = useState<File>();
  const tokenType = localStorage.getItem("tokenType");
  const navigate = useNavigate();

  return (
    <div className={styles.editAppeal}>
      <div className={styles.editAppeal_top}>
        <h1 className="h1_medium">
          <Link
            to={
              tokenType == "trader"
                ? RouterPaths.appeals
                : RouterPaths.merchantAppeals
            }
            style={{ color: "var(--text-secondary)" }}
          >
            Апелляции <FaChevronRight />
          </Link>
          Новая апелляция
        </h1>
        <button
          className="medium button-m-secondary"
          onClick={() => navigate(-1)}
        >
          Закрыть
        </button>
      </div>
      <div className={styles.editAppeal_content}>
        <h2 className="semi-bold">Информация</h2>
        <section>
          <p className="regular">Заказ</p>
          <span className="medium" style={{ color: "var(--blue-primary)" }}>
            -
          </span>
        </section>
        <section className={styles.editAppeal_content_fileSection}>
          <p className="regular">Фактическая сумма поступления</p>
          <NumericFormat
            className="medium"
            decimalSeparator="."
            thousandSeparator=" "
            value={sum}
            maxLength={11}
            onChange={(e) => setSum(e.target.value)}
          />
        </section>{" "}
        <section>
          <p className="regular">Статус</p>
          <i className="medium">
            <FaCheck />
            Обработана
          </i>
        </section>
        <section>
          <p className="regular">Время создания</p>
          <span className="medium"> -</span>
        </section>{" "}
        <section>
          <p className="regular">Время успешного закрытия</p>
          <span className="medium">-</span>
        </section>
      </div>
      <div className={styles.editAppeal_content}>
        <section
          className={styles.editAppeal_content_fileSection}
          style={{ padding: 0 }}
        >
          <p className="regular">Подтверждение</p>
          <label>
            <span className="medium" style={{ color: "var(--blue-primary)" }}>
              {file?.name}
            </span>

            <input
              type="file"
              multiple={false}
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                  console.log(e.target.files);
                }
              }}
            />
            <span
              className={
                file ? "medium button-m-secondary" : "medium button-primary"
              }
            >
              {file ? "Другой файл" : "Добавить файл"}
            </span>
          </label>
        </section>
      </div>
      <div className={styles.editAppeal_buttons}>
        <button className="medium green-button">Создать апелляцию</button>
        <button className="medium red-button">Удалить</button>
      </div>
    </div>
  );
};
