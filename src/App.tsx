import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { MerchantAppeals } from "./Pages/Merchant_appeals/Merchant_appeals";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

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
          <Route path={RouterPaths.appeals} element={<Appeals />} />
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
  appeals: "/merchant-appeals",
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
