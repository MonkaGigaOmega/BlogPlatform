import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to={`/articles/`}>
        <h6 className={styles.blogName}>Realworld Blog</h6>
      </Link>
      <div className={styles.buttons}>
        <Link className={styles.link} to={`/sign-in`}>
          <button type="button" className={styles.button}>
            Sign In
          </button>
        </Link>
        <Link className={styles.link} to={`/sign-up`}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonGreen}`}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  )
}
