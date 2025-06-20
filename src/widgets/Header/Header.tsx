import { IoCopy } from "react-icons/io5";
import styles from "./Header.module.scss";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../../assets/Logotype.svg";

export const Header = ({
  setOpened,
}: {
  setOpened: (open: boolean) => void;
}) => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header_logo} alt="" />
      <p className="regular">
        Текущий курс: <span className="medium">79,34</span>
      </p>
      <p
        className={`${styles.header_wallet} regular`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigator.clipboard.writeText("TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr");
          toast.success("Скопировано!");
        }}
      >
        Кошелёк:{" "}
        <span className="medium">TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr</span>{" "}
        <IoCopy
          style={{
            color: "var(--text-secondary)",
            transform: "rotate(270deg)",
          }}
        />
      </p>
      <section>
        <span className="medium">username</span>{" "}
        <FaUserCircle style={{ color: "var(--text-active)" }} />{" "}
        <FaChevronDown style={{ color: "white" }} />
      </section>
      <button onClick={() => setOpened(true)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
