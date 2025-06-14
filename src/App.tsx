import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { MerchantAppeals } from "./Pages/MerchantAppeals/MerchantAppeals";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { EditAppeal } from "./Pages/EditAppeal/EditAppeal";
import { NewAppeal } from "./Pages/NewAppeal/NewAppeal";
import { TraderAppeals } from "./Pages/TraderAppeals/TraderAppeals";
import { TraderAppeal } from "./Pages/TraderAppeal/TraderAppeal";
import { Banks } from "./Pages/Banks/Banks";
import { Bank } from "./Pages/Bank/Bank";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/appeals" element={<Appeals />} />
          <Route path={RouterPaths.banks} element={<Banks />} />
          <Route path={RouterPaths.banks + ":id"} element={<Bank />} />
          <Route path={RouterPaths.traderAppeals} element={<TraderAppeals />} />
          <Route
            path={RouterPaths.traderAppeals + ":id"}
            element={<TraderAppeal />}
          />
          <Route
            path={RouterPaths.merchantAppeals}
            element={<MerchantAppeals />}
          />
          <Route path={RouterPaths.newAppeal} element={<NewAppeal />} />
          <Route
            path={RouterPaths.merchantAppeals + ":id"}
            element={<EditAppeal />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const App = () => {
  return <Router />;
};

export const RouterPaths = {
  merchantAppeals: "/merchant-appeals/",
  traderAppeals: "/trader-appeals/",
  newAppeal: "/merchant-appeals/new",
  banks: "/banks/",
};

const Appeals = () => {
  const navigate = useNavigate();
  const tokenType = localStorage.getItem("tokenType");
  useEffect(() => {
    if (tokenType === "merchant") navigate(RouterPaths.merchantAppeals);
    else navigate(RouterPaths.traderAppeals);
  }, [navigate, tokenType]);
  return null;
};
