import styles from './Article.module.scss'
import { truncateText } from '../../helpers/truncateText'
import { format } from 'date-fns';
export default function Article({article}){
    const title = article.title
    const text = truncateText(article.body,120)
    const likes = article.favoritesCount
    const author = article.author.username
    const date = format(new Date(article.createdAt), 'MMMM d, yyyy')
    const avatarUrl = article.author.image
    return <div className={styles.Article}>
        <div className={styles.content}>
            <div className={styles.upline}><h3 className={styles.title}>{title}</h3>{likes}</div>
            <div className={styles.tags}>tags</div>
            <p>{text}</p>
        </div>
        <div className={styles.info}>
            <div className={styles.profile}>        <div className={styles.author}>{author}</div>
            <img alt='avatar' src={avatarUrl} className={styles.avatar}/></div>
        <div className={styles.date}>{date}</div>
        </div>
    </div>
}