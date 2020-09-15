import React, { useState } from 'react'
import {StyledBookInfo, ModalContainer} from './styles/'
import { Button, Rate, Select} from 'antd'
import Feedback from '../feedback';
import { DeleteTwoTone } from '@ant-design/icons'
import FeedbackForm from '../feedback-form';



const BookInfo = ({ category, title, image, description, addFeedback, feedbackList, grading, handleModal}) => {


  const [feedbackForm, setFeedbackForm] = useState(false)

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    // adicionar o dispatch() aqui
  }

  const onFinish = (event) => {
    
  }

  const handleNewFeedback = () => {
    if (feedbackForm === false) {
      setFeedbackForm(true)
    }
    else {
      setFeedbackForm(false)
    }
  }

 

  return(
    <ModalContainer className='modal-container' onClick={handleModal} >
      <StyledBookInfo>
        <div className='bookInfoContent'>
        <img src={image} className='bookCover' />
        <h2 className='bookTitle'>{title}</h2>
        <Rate
              disabled
              allowHalf
              defaultValue={grading}
              style={{ fontSize: 15, display: "revert" }}
              className='bookGrade'
        />
        
        <p className='bookDescription' >{description}</p>
        <Select
            className='addToShelf'
            style={{ width: '100%'}}
            size={"small"}
            placeholder="SHELF"
            optionFilterProp="children"
            onChange={onChange}
          >
            <Option value="shelf1" style={{ paddingLeft: 37 }}>
              <span>Want to read</span>
            </Option>
            <Option value="shelf2" style={{ paddingLeft: 37 }}>
              <span>Current reading</span>
            </Option>
            <Option value="shelf3" style={{ paddingLeft: 37 }}>
              <span>Read</span>
            </Option>
            <Option value="delete" style={{ color: "#dd2e44" }}>
              <DeleteTwoTone twoToneColor="#dd2e44" style={{ marginRight: 10 }} />
              <span>Remove</span>
            </Option>
          </Select>
        {/* { addFeedback.required && <Button className='bookNewFeedback' onClick={addFeedback.handleFeedback}>New Feedback</Button>} */}
        </div>
        <div className='feedbackContainer' >
          {feedbackForm ? <FeedbackForm  handleFinish={onFinish}/> : null  //feedbackList.map(feedback => <Feedback  user='' comment='' grading='' />)
          } 
        
        </div>
      </StyledBookInfo>
    </ModalContainer>
  )
}

export default BookInfo