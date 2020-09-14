import React from "react";
import { AsideContainer } from "./styles";
import {Link} from "react-router-dom";

const AsideDescription = ({ description, review, bookData, type }) => {
  return (
    <AsideContainer className="aside-description">
      {type === "search-desktop" && (
        <span className="aside-content">{description ? description : ""}</span>
      )}

      {type === "timeline-desktop" && (
        <span className="aside-content">
          {review ? review : ""}
          {bookData.creator.user ? (
            <Link className="creator" to={`/perfil/${bookData.creator.id}`}>{bookData.creator.user}</Link>
          ) : (
            ""
          )}
        </span>
      )}
    </AsideContainer>
  );
};

export default AsideDescription;
