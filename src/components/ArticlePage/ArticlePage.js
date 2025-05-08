import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticleBySlug } from '../../redux/actions/articleActions'

const ArticlePage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(fetchArticleBySlug(slug))
  }, [slug, dispatch])

  const article = useSelector((state) => state.articles.currentArticle)

  if (!article) {
    return <p>Загружается статья...</p>
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticlePage
