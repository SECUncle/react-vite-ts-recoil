import React, { lazy, FC } from "react";

import LayoutPage from "@/pages/layout";
import { PartialRouteObject } from "react-router";
import WrapperRouteComponent from "./config";
import { useRoutes } from "react-router-dom";

import UploadPage from '@/pages/upload'
import UploadLocationPage from '@/pages/locationUpload'

import LoginPage from '@/pages/login'

//TODO: lazy加载组件，prolayout的菜单无法自动选中菜单项，原因不明
// const NotFound = lazy(() => import('@/pages/404'));
// const AccountPage = lazy(() => import('@/pages/account'));
// const Project = lazy(() => import('@/pages/project'));

import Project from "@/pages/project";

const routeList: PartialRouteObject[] = [

  {
    path: "/upload",
    element: <WrapperRouteComponent element={<UploadPage />} />,
  },
  {
    path: "/auth/login",
    element: <WrapperRouteComponent element={<LoginPage />} />,
  },
  {
    path: "/",
    element: <WrapperRouteComponent element={<LayoutPage />} />,
    children: [
      {
        path: "/upload",
        element: <WrapperRouteComponent element={<UploadPage />} />,
      },
      {
        path: "/uploadLocation",
        element: <WrapperRouteComponent element={<UploadLocationPage />} />,
      },
      {
        path: "/project/list",
        element: <WrapperRouteComponent element={<Project />} />,
      },
      
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
