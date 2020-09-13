import React from "react";
import { AsideContainer } from "./styles";

const AsideDescription = ({ description, review }) => {
  return (
    <AsideContainer className="aside-description">
      <span className="aside-content">
        {description ? description : review}
      </span>
    </AsideContainer>
  );
};

export default AsideDescription;
