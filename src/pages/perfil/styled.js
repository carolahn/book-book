import styled from "styled-components";
import perfil from "../../assets/images/perfil/perfil.svg";

export const PerfilContainer = styled.div`
  margin: 75px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 680px) {
    margin: 15px;
    margin-top: 75px;

    padding: 0;
  }
`;

export const SvgContainer = styled.div`
  height: 100px;
  margin: 50px;

  .title {
    padding-left: 120px;
  }

  svg {
    background-image: url(${perfil});
    float: left;
  }

  @media (max-width: 680px){
    margin: 25px;

    .title {
      padding: 0;
      text-align: center;
    }
  }
`;
