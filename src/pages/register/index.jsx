import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Container, StyledRegister } from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { requestRegisterData } from "../../redux/actions/action-register";
import { useHistory } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.register.status);
  const usernameError = useSelector((state) => state.register.user);
  const emailError = useSelector((state) => state.register.email);
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (status === true) {
      setTimeout(() => {
        history.push("/");
      }, 1500);
    }
  }, [status]);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onFinish = (values) => {
    dispatch(
      requestRegisterData(name, username, email, password, confirmPassword)
    );
  };

  return (
    <Container>
      <StyledRegister>
        <h1>Register</h1>

        <Form
          onFinish={onFinish}
          form={form}
          name="register"
          className="formRegister"
          
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
                pattern: /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/



              },
            ]}
            className="formItem"
          >
            <Input
              className="inputRegister"
              onChange={handleName}
              placeholder="Name"
            />
          </Form.Item>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                min: 6,
              },
            ]}
            className="formItem"
          >
            <Input
              className="inputRegister"
              onChange={handleUsername}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            className="formItem"
          >
            <Input
              className="inputRegister"
              onChange={handleEmail}
              placeholder="E-mail"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Your password must contain at least 8 characters including one letter, one number and one special character",
                min: 6,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
              },
            ]}
            className="formItem"
          >
            <Input.Password
              className="inputRegister"
              onChange={handlePassword}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input your Password Again!",
              },({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              })
            ]}
            className="formItem"
          >
            <Input.Password
              className="inputRegister"
              onChange={handleConfirmPassword}
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="buttonRegister">
            Register
          </Button>
        </Form>
        <div className="serverResponse">
          {status === false ? (
            <div className="error">
              <span>
                {usernameError !== "" &&
                  usernameError !== undefined &&
                  `Username ${usernameError}`}
              </span>
              <span>
                {emailError !== "" &&
                  emailError !== undefined &&
                  `Email ${emailError}`}
              </span>
            </div>
          ) : status === true ? (
            <span className="sucess">Sucess</span>
          ) : null}
        </div>
      </StyledRegister>
    </Container>
  );
};

export default Register;
