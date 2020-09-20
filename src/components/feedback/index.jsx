import React from 'react'
import {StyledFeedback, ContainerFeedback} from './styled'
import { Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Feedback = ({user, comment, grading}) => {

  return(
    <ContainerFeedback>
    
      <StyledFeedback>
      
      <h2><UserOutlined style={{fontSize:30}}/> {user}</h2>
      <hr/>
      <p>{comment}</p>
      <hr/>
      <Rate
            disabled
            allowHalf
            defaultValue={grading}
            style={{ fontSize: 15}}
            className='feedbackGrade'
          />
    </StyledFeedback>
    </ContainerFeedback>
  )
}

export default Feedback