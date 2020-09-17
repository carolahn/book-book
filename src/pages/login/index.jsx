/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { StyledDiv, LoginBox } from "./styles";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/login/";
import { useHistory } from "react-router-dom";
import { requestUserBooks } from "../../redux/actions/user-books";

const Login = () => {
  const dispatch = useDispatch();
  const tokenInfo = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    tokenInfo.token && history.push("/timeline");
    tokenInfo.token &&
      dispatch(requestUserBooks(tokenInfo.token, tokenInfo.id));
  }, [tokenInfo]);

  const onFinish = (values) => {
    dispatch(login(values.username, values.password));
  };

  return (
    <StyledDiv>
      <LoginBox>
        <h1>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          {tokenInfo.error && (
            <Form.Item>
              <Alert message={tokenInfo.error_message} type="error" showIcon />
            </Form.Item>
          )}

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item className="button-item">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button login-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </LoginBox>
    </StyledDiv>
  );
};

export default Login;
