import React from "react";
import renderer from "react-test-renderer";
import BookList from "../index";

import {shallow} from "enzyme";

import { Provider } from "react-redux";
import store from "../../../redux/store";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const TestFunfa = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/">{children}</Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

describe("Render Test", () => {
  it("render empty when there is no book", () => {
    const tree = renderer
      .create(<BookList showBooks={[]} type="timeline" size={1000} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render with books", () => {
    const books = [
      {
        title: "title",
        author: "author",
        shelf: 1,
        image_url: "image_url",
        grade: 0,
        categories: "categories",
        review: "review",
        google_book_id: 1,
        creator: { id: 1, user: "Cassa" },
      },
      {
        title: "title2",
        author: "author2",
        shelf: 1,
        image_url: "image_url2",
        grade: 0,
        categories: "categories2",
        review: "review2",
        google_book_id: 2,
        creator: { id: 1, user: "Cassa" },
      },
    ];

    const tree = renderer
      .create(
        <TestFunfa>
          <BookList showBooks={books} type="timeline" page={1} size={1000} />
        </TestFunfa>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("", () => {
  it("", () => {
    expected().toMatchSnapshot();
  });

  it("", () => {});
});
