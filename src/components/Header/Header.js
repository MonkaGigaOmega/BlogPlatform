import styles from './Header.module.scss'
export default function Header(){
    return <header className={styles.header}>
        <h6 className={styles.blogName}>Realworld Blog</h6>
        <div className={styles.buttons}>
            <button type='button' className={styles.button}>Sign In</button>
            <button type='button' className={`${styles.button} ${styles.buttonGreen}`}>Sign Up</button>
        </div>
    </header>
}