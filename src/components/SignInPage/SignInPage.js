import styles from './SignInPage.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
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
              type="password"
              className={styles.input}
              placeholder="Password"
            />
          </label>
          <button type="submit" className={styles.formButton}>
            Login
          </button>
          <p className={styles.signUpText}>
            Don’t have an account?
            <span className={styles.blueText}>
              <Link className={styles.link} to={`/sign-up`}>
                Sign Up
              </Link>
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
