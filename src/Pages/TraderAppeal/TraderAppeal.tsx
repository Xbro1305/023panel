import { FaCheck, FaChevronRight } from "react-icons/fa";
import styles from "../EditAppeal/EditAppeal.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../App";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export const TraderAppeal = () => {
  const [sum, setSum] = useState<string>("2000");
  const [file] = useState<File>();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.editAppeal}>
      <div className={styles.editAppeal_top}>
        <h1 className="h1_medium">
          <Link
            to={RouterPaths.traderAppeals}
            style={{ color: "var(--text-secondary)" }}
          >
            Апелляции
          </Link>
          <span style={{ color: "var(--text-secondary)" }}>
            <FaChevronRight />
          </span>
          Страница апелляции (ID {id})
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
            Заказ на{" "}
            <NumericFormat
              thousandSeparator=" "
              value={sum}
              displayType="text"
            />
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
            displayType="text"
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
          <span className="medium"> 18.05.2025 23:20</span>
        </section>{" "}
        <section>
          <p className="regular">Время успешного закрытия</p>
          <span className="medium">18.05.2025 23:24</span>
        </section>
      </div>
      <div className={styles.editAppeal_content}>
        <section
          className={styles.editAppeal_content_fileSection}
          style={{ padding: 0 }}
        >
          <p className="regular">Подтверждение</p>
          <label>
            <span
              className="medium"
              style={{ color: file ? "var(--blue-primary)" : "" }}
            >
              {file?.name || "Файл отсутствует"}
            </span>
          </label>
        </section>
      </div>
    </div>
  );
};
