import React from 'react'
import StyledBookInfo from './styles/'
import { Button, Rate, Select} from 'antd'

const bookData = {
  title: "React JS Fundamental",
  author: "Onesinus SPT",
  image_url:
    "http://books.google.com/books/content?id=Rhl1CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  grade: 0,
  categories: "Computers",
  review:
    "In this ebooks we will learn basic Single Page Application with React JS 1. How to Install React JS with create-react-app 2. Fetching data from API 3. Using Global Context with useContext 4. Unit Testing with JEST [Ongoing]",
  google_book_id: "u1CsDwAAQBAJ",
};

const BookInfo = ({ category, title, image, description, addFeedback, feedbackList, grading}) => {
  return(
    <StyledBookInfo>
      <div className='bookInfoContent'>
      <img src={bookData.image_url} className='bookCover' />
      <p className='bookTitle'>{bookData.title}</p>
      <Rate
            disabled
            allowHalf
            defaultValue={bookData.grade}
            style={{ fontSize: 15, display: "revert" }}
            className='bookGrade'
          />
      <Button className='bookButtonShelf'>shelf</Button>
      <p className='bookReview' > {bookData.review}</p>
      {/* {addFeedback.required && <Button className='bookNewFeedback' onClick={addFeedback.handleFeedback}>New Feedback</Button>} */}
      </div>
      <div className='feedbackList'>feedback list</div>
    </StyledBookInfo>
  )
}

export default BookInfo