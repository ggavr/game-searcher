const SET_GAMES = 'SET_GAMES';
const SET_QUERY = 'SET_QUERY'
const SET_PAGE = 'SET_PAGE'

const defaultState = {
    games: [],
    currentQuery: '',
    currentPage: 1
}
//Action creators
export const setGamesRedux = (payload) => ({type: SET_GAMES, payload})
export const setQuery = (payload) => ({type: SET_QUERY, payload})
export const setPage = payload => ({type: SET_PAGE, payload})

const storeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {...state, games: action.payload}
        case SET_QUERY:
            return {...state, currentQuery: action.payload}
        case SET_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}

export default storeReducer