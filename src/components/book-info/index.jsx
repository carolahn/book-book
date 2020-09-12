import React from 'react'
import StyledBookInfo from './styles/'
import { Button, Rate, Select} from 'antd'
import Feedback from '../feedback';
import { DeleteTwoTone } from '@ant-design/icons'



const BookInfo = ({ category, title, image, description, addFeedback, feedbackList, grading}) => {


  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
    // adicionar o dispatch() aqui
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }


  return(
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
      
      <p className='bookDescription' > {description}</p>
      <Select
          showSearch
          className='addToShelf'
          style={{ width: '100%'}}
          size={"small"}
          placeholder="SHELF"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
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
      <div className='feedbackList' >
        {/* {feedbackList.map(feedback => <Feedback // passar por props as infos />)} */}
      </div>
    </StyledBookInfo>
  )
}

export default BookInfo