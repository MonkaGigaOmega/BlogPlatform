const initialState = {
  articles: [], // для списка статей
  loadingArticles: false, // состояние загрузки списка статей
  loadingArticle: false, // состояние загрузки конкретной статьи
  error: null,
  articlesCount: 0,
  currentArticle: null, // конкретная статья
}

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_START':
      return { ...state, loadingArticles: true, error: null }

    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        loadingArticles: false,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
      }

    case 'FETCH_ARTICLES_FAILURE':
      return { ...state, loadingArticles: false, error: action.payload }

    case 'FETCH_ARTICLE_START':
      return {
        ...state,
        loadingArticle: true,
        error: null,
        currentArticle: null,
      }

    case 'FETCH_ARTICLE_SUCCESS':
      return {
        ...state,
        loadingArticle: false,
        currentArticle: action.payload.article,
      }

    case 'FETCH_ARTICLE_FAILURE':
      return { ...state, loadingArticle: false, error: action.payload }

    default:
      return state
  }
}
