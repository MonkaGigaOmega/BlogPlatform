import styles from './ArticleList.module.scss'
import Article from '../Article/Article'
import { Pagination } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import fetchArticles from '../../redux/actions/articleActions'
import { useSearchParams } from 'react-router-dom'
export default function ArticleList() {
  useSearchParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles(currentPage))
  }, [dispatch, currentPage])

  const articles = useSelector((state) => state.articles.articles)
  const articlesCount = useSelector((state) => state.articles.articlesCount)
  const loading = useSelector((state) => state.articles.loading)
  const error = useSelector((state) => state.articles.error)

  const handlePageChange = (page) => {
    setSearchParams({ page })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.ArticleList}>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
      <Pagination
        className={styles.Pagination}
        current={currentPage}
        total={articlesCount}
        pageSize={5}
        showSizeChanger={false}
        onChange={handlePageChange}
      />
    </div>
  )
}
