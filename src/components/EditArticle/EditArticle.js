import styles from './EditArticle.module.scss'
import { useParams } from 'react-router-dom'
export default function EditArticle() {
  const { slug } = useParams()
  console.log(slug)
  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form>
          <h3 className={styles.title}>Edit article</h3>

          <label>
            <p className={styles.inputName}>Title</p>
            <input className={styles.input} placeholder="Title" />
          </label>

          <label>
            <p className={styles.inputName}>Short description</p>
            <input className={styles.input} placeholder="Short description" />
          </label>

          <label>
            <p className={styles.inputName}>Text</p>
            <textarea className={styles.textarea} placeholder="Text" />
          </label>

          <div className={styles.tagsMenu}>
            <p className={styles.inputName}>Tags</p>
            <div className={styles.tagCreate}>
              <input className={styles.inputTag} placeholder="Tag" />
              <button
                type="button"
                className={`${styles.button} ${styles.buttonDelete}`}
              >
                Delete
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonAdd}`}
              >
                Add tag
              </button>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.formButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
