import styled from "styled-components";
import { Layout } from "antd";
// const { Sider } = Layout;

export const Container = styled(Layout)`
  margin: 5px;
  margin-top: 50px;
  background-color: #fff;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
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
