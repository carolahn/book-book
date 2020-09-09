import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { StyledDiv, LoginBox, Header } from './styles/index';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';


const Login = () => {

    const dispatch = useDispatch();
    //const tokenInfo = useSelector();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <StyledDiv>
            <Header />
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
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button login-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </LoginBox>
        </StyledDiv>
    )
}

export default Login;