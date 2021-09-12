import React from "react";
import UploadPage from "./upload";
import axios from '../../api/request';

const Index = () => {

  var params = {},
       queryString = 'access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOmNyZWF0ZSIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoib0g4SHN1cHliTTRzMHhBYTl0emhBZFoyS1VkTmVOTFMiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvYWp3dGV4cDYwIiwianRpIjoid05RcjlZeWlJbThwZE1QYWNMMTljT21YYzZmY0ZLd2Jkdm9QSm9zZGZZTE1vYWlJVGd4S05xUGxxYXl0N2xEbyIsInVzZXJpZCI6IlY0V1hKOFBZWlZQQyIsImV4cCI6MTYzMTQyNzI4MX0.fn596p676DL5c0nCbKcPnbQMoNZLVbyw_hR3soaHckILa7r_D_1emBF3lYjR2J4JtM4TymKq8Vi93zei0g8UpBHuiQ5NeXY8f03xWJlCFaTfy92YOwXGQW7-KuFWZ05AGlPQNRxnW9jb3fo7PhSjVNrYxhxYzLwnjeetg_WCf91bYqeO-37RpNwCHYeNUvb3J76yhsvXixCviKQjGY_vcQaLTk9mFm08inDWcDTkAsqdaPMyxgZdpnbNjUqhEG_eFWyzap-Eg7At53ltTaRIUgF-9rgiHJ_J3PUhSlXohQmSHq9VrIWuc1iXLvoLUEgq7KgtZJy4RoAg5w0wV2nucQ&token_type=Bearer&expires_in=3599',
       regex = /([^&=]+)=([^&]*)/g,
       m;
   while (m = regex.exec(queryString)) {
     params[m[1]] = m[2];
   }

   localStorage.setItem('token', params["access_token"])
  //  alert("your access token is : " + params["access_token"]);

  const tokenParams = {
    clientId: "oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS",
    clientSecret: "Vok15vBX4bq2f8Iy",
    rediectUrl: "http://localhost:3000",
  };
  let href = `https://developer.api.autodesk.com/authentication/v1/authorize?response_type=token
  &client_id=${tokenParams.clientId}
  &redirect_uri=${tokenParams.rediectUrl}&scope=data:create%20data:read%20data:write`;

  const getToken = () => {};

  const getAccountId =()=>{
    axios.get(
      
    )
  }
  return (
    <ul>
      <li>
        <a href={href} target="_blank">
          获取token
        </a>
        <button onClick={getToken}>get accessToken</button>
        {/* <a href="https://developer.api.autodesk.com/authentication/v1/authorize?response_type=code&client_id=obQDn8P0GanGFQha4ngKKVWcxwyvFAGE&redirect_uri=http://localhost:3000&scope=data:read">Click here to grant access to your data!</a>
        <a href="https://developer.api.autodesk.com/authentication/v1/authorize?response_type=token&client_id=obQDn8P0GanGFQha4ngKKVWcxwyvFAGE&redirect_uri=http://localhost:3000&scope=data:read">Click here to grant access to your data!</a> */}
      </li>
      <li>
        <span>step5</span>
        <UploadPage></UploadPage>
      </li>
      <li>
        <span>step6</span>
      </li>
      <li>
        <span>step7</span>
      </li>
      <li>
        <span>step8</span>
      </li>
    </ul>
  );
};

export default Index;
