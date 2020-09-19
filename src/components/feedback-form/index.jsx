import React from 'react'
import { Button, Form, Rate, Input} from 'antd'

const FeedbackForm = ({ handleFinish }) => {


  const {TextArea} = Input
  return(
    <Form className='feedbackForm' onFinish={handleFinish}>
            <Form.Item
            name='comment'
            label='Comment:' >
              <TextArea rows={10} cols={40}/>
            </Form.Item>
           
            <Form.Item
              name='grading'
              label='Grading:' >
            <Rate
              allowHalf
              defaultValue={0}
              style={{ fontSize: 30, display: "revert" }}
              className='feedbackGrade'
            />

            </Form.Item>
            <Button type='primary' htmlType='submit' className='feedbackFormSubmit'>Submit</Button>
          </Form>
  )
}

export default FeedbackForm