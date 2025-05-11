import styles from './Article.module.scss'
import { truncateText } from '../../helpers/truncateText'
import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import defaultAvatar from '../../pics/av.jpg'
export default function Article({
  article,
  isFullPage = false,
  isAuthor = false,
}) {
  const likes = article.favoritesCount
  const slug = article.slug
  const tagList = article.tagList
  const isLiked = false
  console.log('isAuthor:', isAuthor)

  return (
    <div
      className={`${styles.Article} ${!isFullPage ? styles['Article--shadow'] : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.upline}>
          <Link className={styles.link} to={`/articles/${slug}`}>
            <h3 className={styles.title}>{article.title}</h3>
          </Link>
          <button
            className={`${styles.like} ${isLiked && styles.likeActive}`}
          />
          {likes}
        </div>
        <div className={styles.tags}>
          {tagList.length > 0 ? (
            tagList.map((tag, index) => (
              <span key={index} className={styles.tagItem}>
                {tag}
              </span>
            ))
          ) : (
            <p>No tags added</p> // Покажет, если тегов нет
          )}
        </div>

        <p>{truncateText(article.description, 180)}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.profile}>
          <div className={styles.authorWrapper}>
            <div className={styles.author}>{article.author.username}</div>
            <div className={styles.date}>
              {format(new Date(article.createdAt), 'MMMM d, yyyy')}
            </div>
          </div>
          <img
            alt="avatar"
            src={article.author.image || defaultAvatar}
            className={styles.avatar}
          />
        </div>
        {isAuthor && (
          <div className={styles.buttons}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
      </div>
    </div>
  )
}

Article.propTypes = {
  isFullPage: PropTypes.bool.isRequired,
  isAuthor: PropTypes.bool.isRequired,
  article: PropTypes.shape({
    tagList: PropTypes.array.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
}
