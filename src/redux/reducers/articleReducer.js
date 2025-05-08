const initialState = {
  articles: [],
  loading: false,
  error: null,
  articlesCount: 0,
  currentArticle: null,
}

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_ARTICLES_SUCCESS': {
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      }
    }
    case 'FETCH_ARTICLES_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'FETCH_ARTICLE_START':
      return { ...state, loading: true, error: null, currentArticle: null }

    case 'FETCH_ARTICLE_SUCCESS':
      return {
        ...state,
        loading: false,
        currentArticle: action.payload.article,
      }

    case 'FETCH_ARTICLE_FAILURE':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
