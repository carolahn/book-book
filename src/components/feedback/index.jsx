import React from 'react'
import {StyledFeedback, ContainerFeedback} from './styled'
import { Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Feedback = () => {

  return(
    <ContainerFeedback>
      <h2 className='titleFeedback'>Feedbacks</h2>
      <StyledFeedback>
      
      <h2><UserOutlined style={{fontSize:30}}/> Username</h2>
      <hr/>
      <p>
      É um fato conhecido de todos que um leitor se 
      distrairá com o conteúdo de texto legível 
      de uma página quando estiver examinando sua diagramação. 
      A vantagem de usar Lorem Ipsum é que ele 
      tem uma distribuição normal de letras, 
      ao contrário de "Conteúdo aqui, conteúdo aqui", 
      fazendo com que ele tenha uma aparência similar a de um texto legível. 
      Muitos softwares de publicação e editores de páginas na internet agora 
      </p>
      <hr/>
      <Rate
            disabled
            allowHalf
            defaultValue={5}
            style={{ fontSize: 15}}
            className='feedbackGrade'
          />
    </StyledFeedback>
    </ContainerFeedback>
  )
}

export default Feedback