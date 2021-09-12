import React from "react";

const login =()=>{
  const tokenParams = {
    clientId: "oH8HsupybM4s0xAa9tzhAdZ2KUdNeNLS",
    clientSecret: "Vok15vBX4bq2f8Iy",
    rediectUrl: "http://localhost:3000",
  };
  let href = `https://developer.api.autodesk.com/authentication/v1/authorize?response_type=token
  &client_id=${tokenParams.clientId}
  &redirect_uri=${tokenParams.rediectUrl}&scope=data:create%20data:read%20data:write`;
  return (
    <div style={{
      textAlign: 'center',
      marginTop:'50px'
    }}>
        <a  href={href}>获取token</a>
    </div>
  )
}

export default login