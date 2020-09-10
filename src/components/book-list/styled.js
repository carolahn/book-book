import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;

export const Container = styled(Layout)`
  margin: 5px;
    background-color: #fff;
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;
  }
`;

export const MostPopular = styled(Sider)`
  background-color: #aaa;
  position: sticky;
  top: 50px;

  min-width: 300px !important;
  height: calc(100vh - 90px - 10px);

  padding: 25px;
  border-radius: 10px;
`;
