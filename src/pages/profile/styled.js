import styled from "styled-components";
import perfil from "../../assets/images/perfil/perfil.svg";

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .books-container {
    max-width: 627px;
    min-width: 315px;
  }

  @media (max-width: 650px) {
    .books-container {
      margin-top: 70px;
    }
    .aside-description {
      display: none;
    }
  }
`;

export const SvgContainer = styled.div`
  height: 100px;
  margin-top: 70px;
  margin-bottom: 10px;
  width: 627px;
  padding-left: 130px;

  .title {
    padding-left: 120px;
  }

  svg {
    background-image: url(${perfil});
    float: left;
  }

  @media (max-width: 650px) {
    margin-top: -20px;
    width: 315px;
    padding-left: 0;

    .title {
      padding: 0;
      text-align: center;
      margin-top: 75px;
    }

    svg {
      display: none;
    }
  }
`;