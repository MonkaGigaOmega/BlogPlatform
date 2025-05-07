const initialState = {
    articles: [],
    loading: false,
    error: null,
    articlesCount:0
  }

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_ARTICLES_START':
        return { ...state, loading: true, error: null }
        case 'FETCH_ARTICLES_SUCCESS': {
            return { ...state,loading:false, articles: action.payload.articles,articlesCount:action.payload.articlesCount}
          }
          case 'FETCH_ARTICLES_FAILURE':
            return{...state,loading:false, error: action.payload}
      default:
        return state
    }
  }