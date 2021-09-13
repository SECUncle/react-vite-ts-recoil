import { MenuList } from "@/models/menu.interface";
// import { LoginParams, LoginResult } from "@/models/login";
import { CurrentUserResult } from "@/models/user";

import {
  hubType,
  projectType,
  hubResult,
  projectResult,
  folderResult,
  nestedFolderResult,
  storageObjectResult,
  fileObjectResult,
  folderType,
  createStorageParams,
  createFirstVersionToFileParams,
} from "@/models/upload.interface";
import {
  useBatch,
  useCreate,
  useGetList,
  useGetOne,
  useUpdate,
  useGetAccoutId,
  useAsyncCreate,
  getServeice,
  postService,
  putService,
} from "./request";

const projectResource = "/projects";

// export const useLogin = () => {
//     return useCreate<LoginParams, LoginResult>("/login");
// }

export const useGetCurrentUser = () => {
  return useGetOne<CurrentUserResult>("CurrentUser", "/current/user");
};

export const useGetCurrentMenus = () => {
  return useGetList<MenuList>("CurrentMenuList", "/current/menu");
};
export const useGetProjects = (pagination: any, filters: any) => {
  return useGetList<API.ProjectPagination>(
    "Projects",
    projectResource,
    pagination,
    filters
  );
};
export const useAddProject = () => {
  return useCreate<API.Project, API.Project>(projectResource);
};

export const useUpdateProject = () => {
  return useUpdate<API.Project>(projectResource);
};

export const useBatchDeleteProject = () => {
  return useBatch(projectResource + ":batchDelete");
};

// step1

export const getAccoutIdService = () => {
  return getServeice<hubResult>("/project/v1/hubs");
};
//step2
export const getProjectIdService = (hubId: hubType) => {
  return getServeice<projectResult>(`/project/v1/hubs/${hubId}/projects`);
};

// step3
export const getFindFolderIdService = (
  hubId: hubType,
  projectId: projectType
) => {
  return getServeice<projectResult>(
    `/project/v1/hubs/${hubId}/projects/${projectId}/topFolders`
  );
};

//step4
export const getFindNestedFolderIdService = (
  projectId: projectType,
  folderId: folderType
) => {
  return getServeice<nestedFolderResult>(
    `/data/v1/projects/${projectId}/folders/${folderId}/contents`
  );
};

//step5
export const createStorageService = (projectId:string, params:createStorageParams) => {
    return postService<storageObjectResult>(
    `/data/v1/projects/${projectId}/storage`,
    params
  );
};

//step6

export const uploadFileToStorageService = () => {
  return getServeice<nestedFolderResult>(
    `/data/v1/projects/${projectId}/folders/${folderId}/contents`
  );
};

// step7

export const createFirstVersionService = (projectId:string,params:createFirstVersionToFileParams) => {
  return postService<nestedFolderResult>(
    `/data/v1/projects/${projectId}/items`,
    params
  );
};

// step8

export const useCreateAddtionalVersionService = () => {
  return useGetOne("CurrentUsers", "/project/v1/hubs");
};
