import React, { useState, useEffect} from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
import backgroundImage from '../../assets/images/background-covers.jpg'
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
    
    if (status) {
      setTimeout(() =>{
        history.push('/')
      }, 2000)
    }
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


const Container = styled.div`
  width:100vw;
  
  background-image: url(${backgroundImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 20vw 15vw 30vw 15vw 20vw;


  @media (max-width: 420px) {
    grid-template-rows: 10vh 3fr 10vh;
    grid-template-columns: 10vw 80vw 10vw;
  }

`

const StyledRegister = styled.div`

  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end:3;


  background-color: #fff;
  width:100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius:10px;
  

  .serverResponse {
    color: #696969;
    font-size:20px;  
  }

  .error {
    color: crimson;
    display:flex;
    flex-direction: column;
  }

  .error:last-child {
    padding-bottom: 2.50rem;
  }

  .sucess {
    color: green;
  }

  h2{
    margin:1.25rem;
  }


  .formItem {
    display: flex;
    flex-direction: column;
    
    
    

    .ant-form-item-label{
      display: flex;
      
    }
    .ant-form-item-label label{
      font-size: 16px;
      
    }
  }

  .formRegister {
    width: 50%;
  }

  
  

  .buttonRegister {
    width: 60%;
    margin: 1.25rem;
    margin-bottom: 2.50rem;
  }


  @media (max-width: 420px) {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end:2;
  }


`