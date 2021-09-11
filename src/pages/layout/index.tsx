import React, { FC, useEffect, Suspense, useCallback, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { MenuList, MenuChild } from "@/models/menu.interface";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useGetCurrentMenus } from "@/api";
import { userState } from "@/stores/user";
import { useRecoilState } from "recoil";

import type { MenuDataItem } from "@ant-design/pro-layout";
import ProLayout from "@ant-design/pro-layout";
import { SmileOutlined, HeartOutlined, FrownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLocale } from "@/locales";
import { createBrowserHistory } from "history";
import RightContent from "./components/RightContent";
import { ReactComponent as LogoSvg } from "@/assets/logo/react.svg";
import styles from "./index.module.less";

const history = createBrowserHistory();

const IconMap: { [key: string]: React.ReactNode } = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  frown: <FrownOutlined />,
};

const LayoutPage: FC = ({ children }) => {
  const { data: menuList, error } = useGetCurrentMenus();
  
  const [user, setUser] = useRecoilState(userState);
  const [pathname, setPathname] = useState("/welcome");
  const { device, collapsed, newUser, settings } = user;
  const isMobile = device === "MOBILE";
  const location = useLocation();
  const navigate = useNavigate();
  const { formatMessage } = useLocale();



  const toggle = () => {
    setUser({ ...user, collapsed: !collapsed });
  };

 

  useEffect(() => {
    newUser
  }, [newUser]);

  const loopMenuItem = (menus?: MenuDataItem[]): MenuDataItem[] => {
    if (!menus) return [];

    const m = menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children),
    }));

    return m;
  };

  return (
    <ProLayout
      fixSiderbar
      collapsed={collapsed}
      location={{
        pathname: location.pathname,
      }}
      {...settings}
      onCollapse={toggle}
      formatMessage={formatMessage}
      onMenuHeaderClick={() => history.push("https://reactjs.org/")}
      headerTitleRender={(logo, title, props) => (
        <a
          className={styles.layoutPageHeader}
        >
          <LogoSvg  />
          {title}
        </a>
      )}
      menuHeaderRender={undefined}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: "/",
          breadcrumbName: formatMessage({ id: "menu.home" }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      menuDataRender={() => loopMenuItem(menuList)}
      // menuDataRender={() => m}
      rightContentRender={() => <RightContent />}
      collapsedButtonRender={() => {
        return (
          <div
            onClick={() => toggle}
            style={{
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            <span id="sidebar-trigger">
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </div>
        );
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default LayoutPage;
