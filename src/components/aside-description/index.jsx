import React from "react";
import { AsideContainer } from "./styles";

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
            <button className="creator">{bookData.creator.user}</button>
          ) : (
            ""
          )}
        </span>
      )}
    </AsideContainer>
  );
};

export default AsideDescription;
