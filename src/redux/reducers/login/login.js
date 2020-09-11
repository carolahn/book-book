const defaultState = {
    error: '',
    username: '',
    token: localStorage.getItem('book-book-token') ? localStorage.getItem('book-book-token').data.auth_token : ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }    
}