import styled from "styled-components";
import { Layout } from "antd";
// const { Sider } = Layout;

export const Container = styled.div`
  margin: 5px;

  /* background-color: #fff; */

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

export const WrapBook = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-basis: 515px; */
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;

// export const MostPopular = styled(Sider)`
//   background-color: #aaa;
//   position: sticky;
//   top: 55px;

//   min-width: 362px !important;
//   max-height: calc(100vh - 100px);

//   padding: 25px;
//   border-radius: 10px;

//   overflow: hidden;

//   .ant-layout-sider-children > div{
//     margin: 10px 0;
//   }

//   @media (max-width: 800px) {
//     display: none;
//   }
// `;
