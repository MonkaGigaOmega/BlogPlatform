import styles from './Article.module.scss'
import { truncateText } from '../../helpers/truncateText'
import { format } from 'date-fns'
import PropTypes from 'prop-types'
export default function Article({ article }) {
  const title = article.title
  const text = truncateText(article.description, 180)
  const likes = article.favoritesCount
  const author = article.author.username
  const date = format(new Date(article.createdAt), 'MMMM d, yyyy')
  const avatarUrl = article.author.image
  return (
    <div className={styles.Article}>
      <div className={styles.content}>
        <div className={styles.upline}>
          <h3 className={styles.title}>{title}</h3>
          &#9825; {likes}
        </div>
        <div className={styles.tags}>tags</div>
        <p>{text}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.profile}>
          <div className={styles.authorWrapper}>
            <div className={styles.author}>{author}</div>
            <div className={styles.date}>{date}</div>
          </div>
          <img alt="avatar" src={avatarUrl} className={styles.avatar} />
        </div>
      </div>
    </div>
  )
}
Article.propTypes = {
  article: PropTypes.shape({
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
