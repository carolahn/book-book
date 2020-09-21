import styled from "styled-components";
import { Modal } from "antd";

export const StyledModalCarousel = styled.div`
  .bookCover {
    width: 100px;
    height: 144px;
  }
`;

export const StyledModal = styled(Modal)`
  div.ant-modal-body {
    display: flex;
    justify-content: center;
  }
`;
