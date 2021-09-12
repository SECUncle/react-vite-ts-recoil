import React, { Suspense, useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import { localeConfig } from "@/config/locale";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import RenderRouter from "./routes";

import "./App.less";

import { useGetCurrentUser,useGetAccoutIdService } from "./api";
import { createBrowserHistory } from "history";
import { useRecoilState } from "recoil";
import { userState } from "./stores/user";
import { Locale } from "./models/user";

const history = createBrowserHistory();

const App: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const { locale } = user;

  const { data: currentUser, error } = useGetCurrentUser();
  
  // const { data: currentAccountId, errors } = useGetAccoutIdService();


  // useEffect(() => {
  //   console.log("currentAccountId: ", currentAccountId);
  //   // setUser({ ...user, username: currentUser?.username || "", logged: true });
  // }, [currentAccountId]);

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    setUser({ ...user, username: currentUser?.username || "", logged: true });
  }, [currentUser]);

  useEffect(() => {
    if (locale.toLowerCase() === "en-us") {
      moment.locale("en");
    } else if (locale.toLowerCase() === "zh-cn") {
      moment.locale("zh");
    }
  }, [locale]);

  const getAntdLocale = () => {
    if (locale.toLowerCase() === "en-us") {
      return enUS;
    } else if (locale.toLowerCase() === "zh-cn") {
      return zhCN;
    }
  };

  const getLocale = () => {
    const lang = localeConfig.find((item) => {
      return item.key === locale.toLowerCase();
    });

    return lang?.messages;
    
  }

  if (error) {
    setUser({ ...user, logged: false });
    history.push("/login");
  }

  // if (errors) {
  //   console.log(errors)
  //   // setUser({ ...user, logged: false });
  //   // history.push("/login");
  // }
  return (
    <ConfigProvider locale={getAntdLocale()} componentSize="middle">
      <IntlProvider
        locale={locale.split("-")[0]}
        messages={getLocale()}
      >
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
