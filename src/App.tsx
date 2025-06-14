import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { MerchantAppeals } from "./Pages/MerchantAppeals/MerchantAppeals";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { EditAppeal } from "./Pages/EditAppeal/EditAppeal";
import { NewAppeal } from "./Pages/NewAppeal/NewAppeal";
import { TraderAppeals } from "./Pages/TraderAppeals/TraderAppeals";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={RouterPaths.merchantAppeals}
            element={<MerchantAppeals />}
          />
          <Route path="/appeals" element={<TraderAppeals />} />
          <Route path={RouterPaths.appeals} element={<Appeals />} />
          <Route path={RouterPaths.newAppeal} element={<NewAppeal />} />
          <Route path={RouterPaths.appeal + ":id"} element={<EditAppeal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const App = () => {
  return <Router />;
};

export const RouterPaths = {
  merchantAppeals: "/merchant-appeals",
  appeals: "/appeals",
  appeal: "/merchant-appeals/",
  newAppeal: "/merchant-appeals/new",
};

const Appeals = () => {
  const navigate = useNavigate();
  const tokenType = localStorage.getItem("tokenType");
  useEffect(() => {
    if (tokenType === "merchant") {
      navigate(RouterPaths.merchantAppeals);
    }
  }, [navigate, tokenType]);
  return null;
};
