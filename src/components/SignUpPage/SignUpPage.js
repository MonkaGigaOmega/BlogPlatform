import styles from './SignUpPage.module.scss'
import { Link } from 'react-router-dom'
export default function SignUpPage() {
  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form>
          <h3 className={styles.title}>Create new account</h3>
          <label>
            <p className={styles.inputName}>Username</p>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
            />
          </label>
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
          <label>
            <p className={styles.inputName}>Repeat Password</p>
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
            />
          </label>
          <label className={styles.checkboxWrapper}>
            <input className={styles.checkboxInput} type="checkbox" />I agree to
            the processing of my personal information
            <span className={styles.checkbox}></span>
          </label>
          <button type="submit" className={styles.formButton}>
            Create
          </button>
          <p className={styles.signUpText}>
            Already have an account?
            <span className={styles.blueText}>
              <Link className={styles.link} to={`/sign-in`}>
                Sign In
              </Link>
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
