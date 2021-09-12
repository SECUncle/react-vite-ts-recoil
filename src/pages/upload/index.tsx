import React, { useEffect, useState } from "react";
import UploadPage from "./upload";
import axios from "../../api/request";


interface hubType {
  name: string,
  id: string
}


interface attributesType {
  name: string,
  displayName?: string,
  extension: {
    type: string,
    version: string,
    schema?: {
      href: string
    },
    data?: { [key: string]: string | Array<string> }
  }
}
interface hub {
  type: string,
  id: string,
  attributes?: attributesType
}
interface hubResult {

  jsonapi?: {
    version: string
  },
  links?: {
    self: {
      href: string
    }
  },
  data: Array<hub>


}


interface projectType {
  name: string,
  id: string
}

interface projectResult {
  jsonapi?: {
    version: string
  },
  links?: {
    self: {
      href: string
    }
  },
  data: Array<hub>

}
interface folderType {
  name: string,
  id: string
}

interface folderResult {
  jsonapi?: {
    version: string
  },
  links?: {
    self: {
      href: string
    }
  },
  data: Array<hub>

}
interface nestedFolderType {
  name: string
  id: string,
}

interface nestedFolderResult {
  jsonapi?: {
    version: string
  },
  links?: {
    self: {
      href: string
    }
  },
  data: Array<hub>

}


interface createStorageParams {
  jsonapi?: {
    version: string
  },
  data: {
    type: string,
    attributes: {
      name: string
    },
    relationships: {
      target: {
        data: {
          type: string,
          id: string
        }
      }
    }
  }
}
interface storageObjectType {
  bucketKey: string,
  objectName: string,
  id: string,
  storageId: string,
}

interface storageObjectResult {
  jsonapi?: {
    version: string
  },
  links?: {
    self: {
      href: string
    }
  },
  data: hub

}

interface dataType {
  type: string,
  id: string
}


interface included {
  type: string,
  id: string,
  attributes: attributesType,
  relationships: {
    storage: {
      data: dataType
    }

  }
}
interface createFirstVersionToFileParams {
  jsonapi?: {
    version: string
  },
  data: {
    type: string,
    attributes: attributesType,
    relationships: {
      tip: {
        data: dataType
      },
      parent: {
        data: dataType
      }
    },
  },
  included: Array<included>
}

interface fileObjectType {
  name: string,
  id: string
}

interface fileObjectResult {
  bucketKey: string,
  sha1?: string,
  size: string,
  contentType?: string,
  location?: string

}


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
    await axios({
      method: "get",
      url: "https://developer.api.autodesk.com/project/v1/hubs",
    }).then(function (response: hubResult): void {
      const data = response.data;

      const { attributes, id } = data[0];

      setHub({
        name: attributes.name,
        id: id,
      });
    });
  };

  const getProjectId = async (hubId: hubType) => {
    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/project/v1/hubs/${hubId}/projects`,
    }).then(function (response: projectResult) {
      const data = response.data;

      const { attributes, id } = data[0];

      setProject({
        name: attributes.name,
        id: id,
      });
    });
  };

  const getFolderId = async (hubId: hubType, projectId: projectType) => {
    //  console.log(hubId, projectId, 'hubId, projectId')

    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/project/v1/hubs/${hubId}/projects/${projectId}/topFolders`,

      // responseType:'stream'
    }).then(function (response: folderResult) {
      const data = response.data;

      const { attributes, id } = data[0];

      setFolder({
        name: attributes.name,
        id: id,
      });
    });
  };

  const getNestedFolderId = async (projectId: projectType, folderId: folderType) => {

    await axios({
      method: "get",
      url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/folders/${folderId}/contents`,
    }).then(function (response) {
      const data = response.data;

      const { attributes, id } = data[0];

      setNestedFolder({
        name: attributes.name,
        id: id,
      });
    });
  };

  const createStorageObject = async (nestedFolder: nestedFolderType, projectId: string) => {

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

    await axios({
      method: "post",
      url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/storage`,
      data: params,
    }).then(function (response) {
      const data = response.data;

      const { relationships, id } = data;
      const temp = id.split("urn:adsk.objects:os.object:")[1].split("/");
      const bucketKey = temp[0];
      const objectName = temp[1];
      const targetId = relationships.target.data.id;


      setStorageObject({
        bucketKey: bucketKey,
        objectName: objectName,
        id: targetId,
        storageId: id,
      });
    });
  };

  const uploadFileToStorageObject = async (buketKey: any, objectName: any, formData: any) => {
    await axios({
      headers: {
        "Content-Type": "image/png",
      },
      method: "put",
      url: `https://developer.api.autodesk.com/oss/v2/buckets/${buketKey}/objects/${objectName}`,
      data: formData,
    }).then(function (response) {
      const data = response.data;

      // const { relationships, id } = data;
      console.log("ahjfgshuergfuyehjr???");
    });
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

      // console.log(JSON.stringify(params), "hhjhj");

      // await axios({
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   method: "post",
      //   url: `https://developer.api.autodesk.com/data/v1/projects/${projectId}/items`,
      //   data: params,
      // }).then(function (response) {
      //   const data = response.data;

      //   // const { relationships, id } = data;
      //   console.log("ahjfgshuergfuyehjr<<<<<<<<<<<<<<<<<");
      // });

      var data = JSON.stringify(params);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", `https://developer.api.autodesk.com/data/v1/projects/${projectId}/items`);
      xhr.setRequestHeader("Authorization",
        `Bearer ${localStorage.getItem("token")}`)
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);
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

  

  const onchange = (file: { target: { files: any[]; }; }) => {
    let files = file.target.files[0];

    let data = new FormData();
    data.append("file", files);

    // uploadFileToStorageObject(
    //   storageObject.bucketKey,
    //   storageObject.objectName,
    //   data
    // );

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      "PUT",
      "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/06101662-4511-4423-ae4e-8e70182a9f4f.png"
    );
    xhr.setRequestHeader(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    xhr.setRequestHeader("Content-Type", "image/png");

    xhr.send(data);

    xhr.onload = (e) => {
      if (e.currentTarget.status === 200) {
        const result = JSON.parse(e.target.response);

        setFileObject({ id: result.objectId, name: "" });
      } else {
        // reject(new Error('上传失败'));
      }
    };
    xhr.onerror = () => {
      // reject(new Error('网络好像出问题啦~'));
    };
  };

  useEffect(() => {
    fileObject.id && createFirstVersionFile(
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
          <input type="file" onChange={onchange} />
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
