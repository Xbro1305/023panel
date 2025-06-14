import styles from "./Sidebar.module.scss";
import logo from "../../assets/Logotype.svg";
import close from "../../assets/Vector.svg";
import { GrCreditCard } from "react-icons/gr";
import { NavLink as Link } from "react-router-dom";
import { IoDocument } from "react-icons/io5";
import { RouterPaths } from "../../App";
import { LiaIdCard } from "react-icons/lia";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

export const Sidebar = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (open: boolean) => void;
}) => {
  const tokenType = localStorage.getItem("tokenType");
  return (
    <>
      <div
        style={{ maxWidth: opened ? "304px" : "104px" }}
        className={`${styles.sidebar} ${opened && styles.sidebar_opened}`}
      >
        <section className={styles.sidebar_top}>
          <img src={logo} alt="" />
          <button
            className={styles.sidebar_top_closeButton}
            onClick={() => setOpened(!opened)}
            style={{ transform: opened ? "rotate(0)" : "rotate(180deg)" }}
          >
            <img src={close} alt="" />
          </button>
        </section>

        <section className={styles.sidebar_profile}>
          <span className="medium">username</span>{" "}
          <FaUserCircle style={{ color: "var(--text-active)" }} />{" "}
          <FaChevronDown style={{ color: "white" }} />
        </section>

        <Link
          className={` ${
            !opened && styles.sidebar_links_item_disabled
          } medium ${styles.sidebar_links_item}`}
          to=""
        >
          <GrCreditCard /> <p>Баланс</p>
        </Link>
        <section className={styles.sidebar_links}>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to={
              tokenType == "trader"
                ? RouterPaths.traderAppeals
                : RouterPaths.merchantAppeals
            }
          >
            <IoDocument /> <p>Аппеляции</p>
          </Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
          <Link
            className={` ${
              !opened && styles.sidebar_links_item_disabled
            } medium ${styles.sidebar_links_item} sidebar_link`}
            to=""
          ></Link>
        </section>
        <Link
          className={` ${
            !opened && styles.sidebar_links_item_disabled
          } medium ${styles.sidebar_links_item} sidebar_link`}
          to=""
          style={{ borderTop: "2px solid var(--bg-color)", marginTop: "auto" }}
        >
          <LiaIdCard /> <p>Поддержка </p>
        </Link>
      </div>
      {opened && <div className={styles.sidebar_bg}></div>}
    </>
  );
};
