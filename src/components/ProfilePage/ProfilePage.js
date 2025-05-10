import styles from './ProfilePage.module.scss'
import { useForm } from 'react-hook-form'
export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data) // пока просто выводим данные
  }

  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.title}>Edit Profile</h3>
          <label>
            <p className={styles.inputName}>Username</p>
            <input
              type="text"
              className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
              placeholder="Username"
              {...register('username', {
                required: 'Username is required',
              })}
            />
            {errors.username && (
              <p className={styles.errorText}>{errors.username.message}</p>
            )}
          </label>

          <label>
            <p className={styles.inputName}>Email address</p>
            <input
              type="password"
              className={styles.input}
              placeholder="Email address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
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
