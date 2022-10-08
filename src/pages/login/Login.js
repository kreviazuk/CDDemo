// import { Button } from 'antd';
// import React, { useState } from "react";
import UUID from "es6-uuid";
import "./Login.scss";
const Login = () => {

  const key = UUID(32)
  console.log('key')
  console.log(key)
  return (
    <div className="login_wrapper">
      <div className="form_wapper">
       我是登陆页
      </div>
    </div>
  );
};
export default Login;
