import React from "react";
import { AsideContainer } from "./styles.js";
import { useSelector } from "react-redux";

const AsideDescription = ({ description, review, bookData, type }) => {
  const googleInfo = useSelector((state) => state.reviewsList.googleInfo);

  return (
    <>
      {type === "search-desktop" && (
        <AsideContainer className="aside-description">
          <div className="search">
            <div className="aside-content">
              {description ? description : ""}
            </div>
          </div>
        </AsideContainer>
      )}

      {type === "timeline-desktop" && (
        <AsideContainer className="aside-description">
          <div className="timeline">
            <div className="aside-content">
              {googleInfo ? (
                googleInfo[bookData.google_book_id] ? (
                  googleInfo[bookData.google_book_id].length > 295 ? (
                    <span className="description">
                      {googleInfo[bookData.google_book_id].slice(0, 295)}...
                    </span>
                  ) : (
                    <span className="description">
                      {googleInfo[bookData.google_book_id]}
                    </span>
                  )
                ) : (
                  <span className="no-description">No description</span>
                )
              ) : (
                <span className="no-description">No description</span>
              )}
            </div>
          </div>
        </AsideContainer>
      )}
    </>
  );
};

export default AsideDescription;
