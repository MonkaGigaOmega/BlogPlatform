import styles from './SignUpPage.module.scss'
export default function SignUpPage() {
  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form>
          <p>Sign UP page</p>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}
