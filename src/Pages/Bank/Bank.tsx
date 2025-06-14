import { Link } from "react-router-dom";
import styles from "./Bank.module.scss";
import { RouterPaths } from "../../App";
import { FaChevronRight } from "react-icons/fa";

export const Bank = () => {
  return (
    <div className={styles.bank}>
      <h1 className="h1_medium">
        <Link to={RouterPaths.banks}>
          Банки <FaChevronRight />
        </Link>
        СБЕР (СБП)
      </h1>
      <div className={styles.bank_content}>
        <h2 className="semi-bold">Информация</h2>
        <section>
          <p className="regular">Название банка</p>
          <span className="medium">СБЕР (СБП)</span>
        </section>
        <section>
          <p className="regular">Название банка для пользователя</p>
          <span className="medium">-</span>
        </section>
        <section>
          <p className="regular">Номер телефона банка</p>
          <span className="medium">900</span>
        </section>
        <section>
          <p className="regular">Комиссия</p>
          <span className="medium">6%</span>
        </section>
      </div>
    </div>
  );
};
