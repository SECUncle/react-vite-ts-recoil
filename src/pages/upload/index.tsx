import React, { useEffect, useState } from "react";
import UploadPage from "./upload";

import {
  getAccoutIdService,
  getProjectIdService,
  getFindFolderIdService,
  getFindNestedFolderIdService,
  createStorageService,
  createFirstVersionService,
  
} from "../../api";
import {
  createFirstVersionToFileParams,
  createStorageParams,
  fileObjectType,
  storageObjectType,
  hubType,
  projectType,
  folderType,
  nestedFolderType,
} from "@models/upload.interface";

import { uploadRequest } from "./request";

const Index = (props: any) => {
  const [hub, setHub] = useState<hubType>({
    name: "",
    id: "",
  });

  const [project, setProject] = useState<projectType>({
    name: "",
    id: "",
  });

  const [folder, setFolder] = useState<folderType>({
    name: "",
    id: "",
  });

  const [nestedFolder, setNestedFolder] = useState<nestedFolderType>({
    name: "",
    id: "",
  });

  const [storageObject, setStorageObject] = useState<storageObjectType>({
    bucketKey: "",
    objectName: "",
    id: "",
    storageId: "",
  });

  const [fileObject, setFileObject] = useState<fileObjectType>({
    name: "",
    id: "",
  });

  const [file, setFile] = useState(null);

  const getAccountId = async () => {
    let response = await getAccoutIdService();
    const data = response.data;
    const { attributes, id } = data[0];
    setHub({
      name: attributes.name,
      id: id,
    });
  };

 

  const getProjectId = async (hubId: hubType) => {
    let response = await getProjectIdService(hubId);
    const data = response.data;
    const { attributes, id } = data[0];
    setProject({
      name: attributes.name,
      id: id,
    });
  };

  const getFolderId = async (hubId: hubType, projectId: projectType) => {
    let response = await getFindFolderIdService(hubId, projectId);

    const data = response.data;
    const { attributes, id } = data[0];
    setFolder({
      name: attributes.name,
      id: id,
    });
  };

  const getNestedFolderId = async (
    projectId: projectType,
    folderId: folderType
  ) => {
    let response = await getFindNestedFolderIdService(projectId, folderId);
    const data = response.data;
    const { attributes, id } = data[0];
    setNestedFolder({
      name: attributes.name,
      id: id,
    });
  };

  const createStorageObject = async (
    nestedFolder: nestedFolderType,
    projectId: string
  ) => {
    const params: createStorageParams = {
      jsonapi: { version: "1.0" },
      data: {
        type: "objects",
        attributes: {
          name: "test02" + ".png",
        },
        relationships: {
          target: {
            data: { type: "folders", id: nestedFolder.id },
          },
        },
      },
    };

    let response = await createStorageService(projectId, params);
    const data = response.data;
    const { relationships, id } = data;
    const temp = id.split("urn:adsk.objects:os.object:")[1].split("/");
    const [bucketKey, objectName] = temp;
    const targetId = relationships.target.data.id;

    setStorageObject({
      bucketKey: bucketKey,
      objectName: objectName,
      id: targetId,
      storageId: id,
    });
  };

  const uploadFileToStorageObject = async (
    buketKey: any,
    objectName: any,
    formData: any
  ) => {
    // TODO serveice上传不能共用封装
    const response = await uploadRequest({
      url: `${import.meta.env.VITE_BASE_URL
        }/oss/v2/buckets/${buketKey}/objects/${objectName}`,
      method: "put",
      data: formData,
      headers: {
        "Content-Type": "image/png,image/jpg",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    try {
      const result = JSON.parse(response.data);
      setFileObject({ id: result.objectId, name: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const createFirstVersionFile = async (
    projectId: string,
    folderId: string,
    objectId: string,
    nestedFolderName: string
  ) => {
    // console.log("hajfghhjrsgjhgbhjgjhgbhjg");
    const params: createFirstVersionToFileParams = {
      jsonapi: { version: "1.0" },
      data: {
        type: "items",
        attributes: {
          displayName: nestedFolderName + ".png",
          extension: {
            type: "items:autodesk.bim360:File",
            version: "1.0",
          },
        },
        relationships: {
          tip: {
            data: {
              type: "versions",
              id: "1",
            },
          },
          parent: {
            data: {
              type: "folders",
              id: folderId,
            },
          },
        },
      },
      included: [
        {
          type: "versions",
          id: "1",
          attributes: {
            name: nestedFolderName + ".png",
            extension: {
              type: "versions:autodesk.bim360:File",
              version: "1.0",
            },
          },
          relationships: {
            storage: {
              data: {
                type: "objects",
                id: objectId,
              },
            },
          },
        },
      ],
    };

    // let response = await createFirstVersionService(projectId, params)

    const response = await uploadRequest({
      url: `${import.meta.env.VITE_BASE_URL
        }/data/v1/projects/${projectId}/items`,
      method: "post",
      data: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response) {
      console.log("upload first version");
    }

  };

  useEffect(() => {
    getAccountId()
  }, []);

  useEffect(() => {
    hub.id && getProjectId(hub.id);
  }, [hub]);

  useEffect(() => {
    hub.id && project.id && getFolderId(hub.id, project.id);
  }, [project]);

  useEffect(() => {
    project.id && folder.id && getNestedFolderId(project.id, folder.id);
  }, [folder]);

  useEffect(() => {
    nestedFolder && project.id && createStorageObject(nestedFolder, project.id);
  }, [nestedFolder]);

  const onchange = (file: { target: { files: any[] } }) => {
    let files = file.target.files[0];

    let data = new FormData();

    data.append("file", files);

    console.log();

    uploadFileToStorageObject(
      storageObject.bucketKey,
      storageObject.objectName,
      data
    );
  };

  useEffect(() => {
    fileObject.id &&
      createFirstVersionFile(
        project.id,
        folder.id,
        storageObject.storageId,
        nestedFolder.name
      );
  }, [fileObject]);

  return (
    <ul>
      <li>
        {/* <a href={href}>获取token</a> */}
        <p>token: {localStorage.getItem("token")}</p>
      </li>

      <li>
        <span>step1</span>
        <p>hub name:{hub.name} </p>
        <p>hub ID: {hub.id}</p>
      </li>

      <li>
        <span>step2</span>
        <p>project name:{project.name} </p>
        <p>project ID:{project.id} </p>
      </li>

      <li>
        <span>step3</span>
        <p>folder name: {folder.name}</p>
        <p>folder ID: {folder.id}</p>
      </li>
      <li>
        <span>step4</span>
        <p>nestFolder name: {nestedFolder.name}</p>
        <p>nestFolder ID:{nestedFolder.id} </p>
      </li>
      <li>
        <span>step5</span>
        <p>storageObject bucketKey:{storageObject.bucketKey} </p>
        <p>storageObject objectName: {storageObject.objectName}</p>
        <p>storageObject ID: {storageObject.id}</p>
      </li>
      <li>
        <span>step6</span>
        <p>
          <input type="file" onChange={onchange} disabled={!storageObject.bucketKey && !storageObject.objectName} />
        </p>
        <p>object name: {nestedFolder.name}</p>
        <p>object ID: {fileObject.id}</p>
      </li>
      <li>
        <span>step7</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>
      <li>
        <span>step8</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>
      <li>
        <span>大文件上传</span>

        <UploadPage></UploadPage>
      </li>
    </ul>
  );
};

export default Index;
