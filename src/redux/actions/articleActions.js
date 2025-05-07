export default function fetchArticles(page) {
    return async function(dispatch) {
      dispatch({ type: 'FETCH_ARTICLES_START' });
  
      try {
        const res = await fetch(`https://blog-platform.kata.academy/api/articles?limit=5&offset=${(page - 1) * 5}`);
        if (!res.ok) throw new Error('Ошибка при загрузке статей');
  
        const data = await res.json(); 
        dispatch({
          type: 'FETCH_ARTICLES_SUCCESS',
          payload: {
            articles: data.articles,
            articlesCount: data.articlesCount
          }
        });
      } catch (err) {
        dispatch({ type: 'FETCH_ARTICLES_FAILURE', payload: err.message });
      }
    };
  }
  