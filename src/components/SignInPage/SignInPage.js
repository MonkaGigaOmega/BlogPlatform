import styles from './SignInPage.module.scss'
export default function SignInPage() {
  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form>
          <h3 className={styles.title}>Sign In</h3>
          <label>
            <p className={styles.inputName}>Email address</p>
            <input
              type="text"
              className={styles.input}
              placeholder="Email address"
            />
          </label>
          <label>
            <p className={styles.inputName}>Password</p>
            <input
              type="text"
              className={styles.input}
              placeholder="Password"
            />
          </label>
          <button type="submit" className={styles.formButton}>
            Login
          </button>
          <p className={styles.signUpText}>
            Don’t have an account?
            <span className={styles.blueText}>Sign Up</span>.
          </p>
        </form>
      </div>
    </div>
  )
}
