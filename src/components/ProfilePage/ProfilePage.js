import styles from './ProfilePage.module.scss'
export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form>
          <h3 className={styles.title}>Edit Profile</h3>
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
              type="password"
              className={styles.input}
              placeholder="Email address"
            />
          </label>
          <label>
            <p className={styles.inputName}>New password</p>
            <input
              type="password"
              className={styles.input}
              placeholder="New password"
            />
          </label>
          <label>
            <p className={styles.inputName}>Avatar image (url)</p>
            <input
              type="password"
              className={styles.input}
              placeholder="Avatar image"
            />
          </label>
          <button type="submit" className={styles.formButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
