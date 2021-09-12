import React, { useEffect, useState } from "react";
import UploadPage from "./upload";
import axios from "../../api/request";
import { useLocation } from "react-router-dom";
`//  1、引入useLocation`;

const Index = (props) => {
  const tokenParams = {
    clientId: "oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS",
    clientSecret: "Vok15vBX4bq2f8Iy",
    rediectUrl: "http://localhost:3000",
  };
  let href = `https://developer.api.autodesk.com/authentication/v1/authorize?response_type=token
  &client_id=${tokenParams.clientId}
  &redirect_uri=${tokenParams.rediectUrl}&scope=data:create%20data:read%20data:write`;

  const getToken = () => {};

  const getAccountId = () => {
    // axios.get(
    // )
  };

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
    name: "",
    id: "",
  });

  const [fileObject, setFileObject] = useState({
    name: "",
    id: "",
  });

  const [file, setFile] = useState(null);

  

  return (
    <ul>
      <li>
        <a href={href}>获取token</a>
        <p>token: {localStorage.getItem("token")}</p>
      </li>

      <li>
        <span>step1</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>

      <li>
        <span>step2</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>

      <li>
        <span>step3</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>
      <li>
        <span>step4</span>
        <p>hub name: </p>
        <p>hub ID: </p>
      </li>
      <li>
        <span>step5</span>
        <p>hub name: </p>
        <p>hub ID: </p>
        <UploadPage></UploadPage>
      </li>
      <li>
        <span>step6</span>
        <p>hub name: </p>
        <p>hub ID: </p>
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
    </ul>
  );
};

export default Index;
