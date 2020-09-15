import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {StyledBookInfo, ModalContainer} from './styles/'
import { Button, Rate, Select} from 'antd'
import Feedback from '../feedback';
import { DeleteTwoTone } from '@ant-design/icons'
import FeedbackForm from '../feedback-form';
import { requestReviews } from '../../redux/actions/reviews-list'
import axios from 'axios'


const BookInfo = ({  title, image, description, addFeedback, grading, handleModal, onChange}) => {
  
  const dispatch = useDispatch()
  

  const [feedbackForm, setFeedbackForm] = useState(false)
  const booksReviews = useSelector((state) => state.reviewsList);
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.username)

  useEffect(() => {
    dispatch(requestReviews(token))
    
  }, [])

  const { Option } = Select;
  
  const onFinish = (event) => {
    
    setFeedbackForm(false)
    
    axios({
      url: `https://ka-users-api.herokuapp.com/users/:user_id/books/`,
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      
      "feedback": {
        "name": "Feedback 1 on 1",
        "comment": event.comment,
        "grade": event.grading
      }
      
      
      
    })
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
    <ModalContainer className='modal-container' onClick={handleModal} id='modal-container'>
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

        {addFeedback && <Button className='bookNewFeedback' onClick={handleNewFeedback}>New Feedback</Button>}
        </div>

        <div className='feedbackContainer' >
          {feedbackForm ? 
            <FeedbackForm  
              handleFinish={onFinish}/> :
          Object.values(booksReviews).map(bookReview => bookReview.title === title ? <Feedback key={bookReview.id} user={bookReview.creator.name} grading={bookReview.grade} comment={bookReview.review}/> : null)
           
          } 
        
        </div>
      </StyledBookInfo>
    </ModalContainer>
  )
}

export default BookInfo