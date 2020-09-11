const defaultState =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OTAsImV4cCI6MTYzMTE5NzAwNn0.Ik4vRIARDfs8vMRQFR3g_9iB5yD0IM6UWC0iKn0vCjc";

const token = (state = defaultState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default token;