import React, { useEffect, useState } from "react";
import UploadPage from "./upload";
import axios from "../../api/request";
import { useLocation } from "react-router-dom";
`//  1、引入useLocation`;

const Index = (props) => {
  const [hub, setHub] = useState({
    name: "",
    id: "",
  });

  const [project, setProject] = useState({
    name: "",
    id: "",
  });

  const [folder, setFolder] = useState({
    name: "",
    id: "",
  });

  const [nestedFolder, setNestedFolder] = useState({
    name: "",
    id: "",
  });

  const [storageObject, setStorageObject] = useState({
    // bucketKey: "",
    // objectName: "",
    // id: "",
    // storageId: ''
    bucketKey: "wip.dm.prod",
    objectName: "e2832c42-33d2-4a7a-9cde-7b0197ec8c8c.png",
    id: "urn:adsk.objects:os.object:wip.dm.prod/e2832c42-33d2-4a7a-9cde-7b0197ec8c8c.png",
    storageId: "urn:adsk.wipprod:fs.folder:co.HuMyf_TTQHOo_dXY3ez_mQ",

    // urn:adsk.objects:os.object:/
  });

  const [fileObject, setFileObject] = useState({
    name: "",
    id: "",
  });

  const [file, setFile] = useState(null);

  const tokenParams = {
    clientId: "oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS",
    clientSecret: "Vok15vBX4bq2f8Iy",
    rediectUrl: "http://localhost:3000",
  };
  let href = `https://developer.api.autodesk.com/authentication/v1/authorize?response_type=token
  &client_id=${tokenParams.clientId}
  &redirect_uri=${tokenParams.rediectUrl}&scope=data:create%20data:read%20data:write`;

  const getAccountId = async () => {
    await axios({
      method: "get",
      url: "https://developer.api.autodesk.com/project/v1/hubs",
      // responseType:'stream'
    }).then(function (response) {
      const data = response.data;

      const { attributes, id } = data[0];
      console.log("hhhh", response, data[0]);

      setHub({
        name: attributes.name,
        id: id,
      });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const getProjectId = async (hubId) => {
    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/project/v1/hubs/${hubId}/projects`,
      // responseType:'stream'
    }).then(function (response) {
      const data = response.data;

      const { attributes, id } = data[0];
      console.log("hhhh", response, data[0]);

      setProject({
        name: attributes.name,
        id: id,
      });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const getFolderId = async (hubId, projectId) => {
    //  console.log(hubId, projectId, 'hubId, projectId')

    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/project/v1/hubs/${hubId}/projects/${projectId}/topFolders`,

      // responseType:'stream'
    }).then(function (response) {
      const data = response.data;

      const { attributes, id } = data[0];
      console.log("hhhh", response, data[0]);

      setFolder({
        name: attributes.name,
        id: id,
      });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const getNestedFolderId = async (projectId, folderId) => {
    //  console.log(hubId, projectId, 'hubId, projectId')

    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/folders/${folderId}/contents`,

      // responseType:'stream'
    }).then(function (response) {
      const data = response.data;

      const { attributes, id } = data[0];
      console.log("hhhh", response, data[0]);

      setNestedFolder({
        name: attributes.name,
        id: id,
      });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const createStorageObject = async (nestedFolder, projectId) => {
    console.log(nestedFolder, "njjjj");
    //  console.log(hubId, projectId, 'hubId, projectId')

    const params = {
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

    await axios({
      method: "post",
      url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/storage`,
      data: {
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
      },
    }).then(function (response) {
      console.log("ahjfgshuergfuyehjr<<<<<<<<<<<<<<<<<");
      const data = response.data;

      const { relationships, id } = data;
      console.log("ahjfgshuergfuyehjr<<<<<<<<<<<<<<<<<");
      const temp = id.split("urn:adsk.objects:os.object:")[1].split("/");
      const bucketKey = temp[0];
      const objectName = temp[1];
      console.log("hhhh", response, data[0]);
      const targetId = relationships.target.id;
      console.log(
        bucketKey,
        objectName,
        targetId,
        "hjhgj............................"
      );

      setStorageObject({
        bucketKey: bucketKey,
        objectName: objectName,
        id: targetId,
        storageId: id,
      });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const uploadFileToStorageObject = async (buketKey, objectName, data) => {
    console.log(data, "hjhjkhjkhjkhjkfhrht");

    await axios({
      method: "put",
      url: `https://developer.api.autodesk.com/oss/v2/buckets/${buketKey}/objects/${objectName}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    }).then(function (response) {
      const data = response.data;

      // const { relationships, id } = data;
      console.log("ahjfgshuergfuyehjr<<<<<<<<<<<<<<<<<");
      // const temp = id.split("urn:adsk.objects:os.object:")[1].split("/");
      // const bucketKey = temp[0];
      // const objectName = temp[1];
      // console.log("hhhh", response, data[0]);
      // const targetId = relationships.target.id;
      // console.log(bucketKey, objectName, targetId,'hjhgj............................')

      // setStorageObject({
      //   bucketKey: bucketKey,
      //   objectName: objectName,
      //   id: targetId,
      // });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  const createFirstVersionFile = async (
    projectId,
    folderId,
    objectId,
    nestedFolderName
  ) => {
    const params = {
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

    await axios({
      method: "post",
      url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/items`,
      data: params,
    }).then(function (response) {
      const data = response.data;

      // const { relationships, id } = data;
      console.log("ahjfgshuergfuyehjr<<<<<<<<<<<<<<<<<");
      // const temp = id.split("urn:adsk.objects:os.object:")[1].split("/");
      // const bucketKey = temp[0];
      // const objectName = temp[1];
      // console.log("hhhh", response, data[0]);
      // const targetId = relationships.target.id;
      // console.log(bucketKey, objectName, targetId,'hjhgj............................')

      // setStorageObject({
      //   bucketKey: bucketKey,
      //   objectName: objectName,
      //   id: targetId,
      // });
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
  };

  useEffect(() => {
    getAccountId();
  }, []);

  useEffect(() => {
    getProjectId(hub.id);
  }, [hub]);

  useEffect(() => {
    getFolderId(hub.id, project.id);
  }, [project]);

  useEffect(() => {
    getNestedFolderId(project.id, folder.id);
  }, [folder]);

  // useEffect(() => {
  //   createStorageObject(nestedFolder, project.id);
  // }, [nestedFolder]);

  // useEffect(() => {
  //   uploadFileToStorageObject(
  //     storageObject.bucketKey,
  //     storageObject.objectName
  //   );
  // }, [storageObject]);

  const onchange = (file) => {
    let files = document.querySelector("input[type=file]").files[0];
    console.log(
      file,
      "hjsghj",
      document.querySelector("input[type=file]").files[0]
    );
    let data = new FormData();
    data.append("file", files);

    const getObjectURL = (file) => {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      }
      return url;
    };
    console.log(getObjectURL(files), "值？？？？？？？？？？");

    uploadFileToStorageObject(
      storageObject.bucketKey,
      storageObject.objectName,
      data
    );
  };

  useEffect(() => {
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
        <a href={href}>获取token</a>
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
          <input type="file" onChange={onchange} />
        </p>
        <p>object name: </p>
        <p>object ID: </p>
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
