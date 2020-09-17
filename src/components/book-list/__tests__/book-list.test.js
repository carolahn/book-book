import React from "react";
import renderer from "react-test-renderer";
import BookList from "../index";

describe("Render Test", () => {
  it("render empty when there is no book", () => {
    const list = renderer
      .create(<BookList showBooks={[]} type="timeline" page={1} size={1000} />)
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  it("render books", () => {
    const books = [{
        title: "title",
        author: "author",
        shelf: 1,
        image_url: "image_url",
        grade: 0,
        categories: "categories",
        review: "review",
        google_book_id: 1,
      },]

    const list = renderer
      .create(<BookList showBooks={[]} type="timeline" page={1} size={1000} />)
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
