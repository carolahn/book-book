import React, { useState, useEffect} from 'react'
import { Form, Input, Button } from 'antd'
import { Container, StyledRegister } from './styles.js'
import { useDispatch, useSelector} from 'react-redux'
import { requestRegisterData } from '../../redux/actions/action-register'
import { useHistory } from 'react-router-dom'

const Register = () => {


  const dispatch = useDispatch()

  const status = useSelector((state) => state.register.status)
  const usernameError = useSelector((state) => state.register.user)
  const emailError = useSelector((state) => state.register.email)
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [form] = Form.useForm();

    
  useEffect(() => {
    
    if (status === true) {
      setTimeout(() =>{
        history.push('/')
      }, 1500)
    }
  }, [status])

  const handleName = (event) => {
    setName(event.target.value)
    
  }
  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  
  const onFinish = values => {
    dispatch(requestRegisterData(name, username, email, password, confirmPassword))
  }
 
  return(
    <Container>
      <StyledRegister>
      
      <h2>Register</h2>
      
      <Form
        onFinish={onFinish}
        form={form}
        name='register'
        className='formRegister'
      >
        <Form.Item
        name='name'
        label='Name'
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
        className='formItem'
        >
          <Input className='inputRegister' onChange={handleName}/>
        </Form.Item>

        <Form.Item
        name='username'
        label='Username'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        className='formItem'
        >
          <Input className='inputRegister' onChange={handleUsername}/>
        </Form.Item>

        <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        className='formItem'
        >
          <Input className='inputRegister' onChange={handleEmail}/>
        </Form.Item>

        <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        className='formItem'
        >
          <Input.Password className='inputRegister' onChange={handlePassword}/>
        </Form.Item>

        <Form.Item
        name='confirmpassword'
        label='Confirm Password'
        rules={[
          {
            required: true,
            message: 'Please input your Password Again!',
          },
        ]}
        className='formItem'
        >
          <Input.Password className='inputRegister' onChange={handleConfirmPassword}/>
        </Form.Item>

        <Button type='primary' htmlType='submit' className='buttonRegister'>
          Register
        </Button>
        
      </Form>
      <div className='serverResponse'>
        {status === false? 
          <div className='error'>
            <span>{usernameError !== '' && usernameError !== undefined && `User ${usernameError}`}</span>
            <span>{emailError !== '' && emailError !==  undefined &&  `Email ${emailError}`}</span>
          </div>
        : status === true?
          <span className='sucess'>Sucess</span> : null
        }
      </div>
    </StyledRegister>

    </Container>
  )
}

export default Register


