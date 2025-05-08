import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={`/articles/`}>
        <h6 className={styles.blogName}>Realworld Blog</h6>
      </Link>
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>
          Sign In
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonGreen}`}
        >
          Sign Up
        </button>
      </div>
    </header>
  )
}
