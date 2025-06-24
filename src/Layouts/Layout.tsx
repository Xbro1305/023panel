import { useEffect, useState } from "react";
import { Header } from "../widgets/Header/Header";
import { Sidebar } from "../widgets/Sidebar/Sidebar";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(window.innerWidth <= 1024 ? false : true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Добавляем слушатель события
    window.addEventListener("resize", handleResize);

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 1024) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);

  return (
    <div className={styles.layout}>
      {width >= 761 ? (
        <>
          <Sidebar opened={open} setOpened={setOpen} />
          <div
            className={styles.layout_content}
            style={
              width < 1024
                ? { maxWidth: "calc(100% - 104px)", marginLeft: "104px" }
                : {
                    maxWidth: open
                      ? "calc(100% - 304px)"
                      : "calc(100% - 104px)",
                  }
            }
          >
            <Header setOpened={setOpen} />
            <Outlet />
          </div>
        </>
      ) : (
        <>
          <Sidebar opened={open} setOpened={setOpen} />
          <div className={styles.layout_content} style={{ width: "100%" }}>
            <Header setOpened={setOpen} />
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};
