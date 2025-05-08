import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticleBySlug } from '../../redux/actions/articleActions'
import MarkdownIt from 'markdown-it'
import './ArticlePage.css'

const ArticlePage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(fetchArticleBySlug(slug))
  }, [slug, dispatch])

  const article = useSelector((state) => state.articles.currentArticle)
  const loading = useSelector((state) => state.articles.loadingArticle)
  const error = useSelector((state) => state.articles.error)

  if (loading) return <p>Загружается статья...</p>
  if (error) return <p>Произошла ошибка: {error}</p>
  if (!article) return <p>Статья не найдена.</p>

  const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

  const fixMarkdown = (mdText) =>
    mdText
      .replace(/^(#{1,6})([^\s#])/gm, '$1 $2') // пробел после #
      .replace(/^(-|\+|\*)([^\s])/gm, '$1 $2') // пробел после маркера списка
      .replace(/^(\d+\.)[^\s]/gm, '$1 ') // пробел после цифры в списке

  const rawBody = article.body || ''
  const fixedBody = fixMarkdown(rawBody)
  const articleContent = md.render(fixedBody)

  return (
    <div>
      <h1>{article.title}</h1>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: articleContent }}
      />
    </div>
  )
}

export default ArticlePage
