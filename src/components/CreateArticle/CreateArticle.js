import { useForm, useFieldArray } from 'react-hook-form'
import { useEffect, useState } from 'react'
import styles from './CreateArticle.module.scss'
import { Link } from 'react-router-dom'
export default function CreateArticle() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList',
  })

  useEffect(() => {
    if (fields.length === 0) append('')
  }, [fields, append])

  const onSubmit = async (data) => {
    setMessage('')
    setError('')

    const token = localStorage.getItem('token')
    const bodyToSend = { article: data }

    try {
      const response = await fetch(
        'https://blog-platform.kata.academy/api/articles',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(bodyToSend),
        }
      )

      const result = await response.json()

      if (response.ok) {
        setMessage('Article created successfully!')
        console.log('Статья создана:', result)
      } else {
        setError(result.errors ? result.errors : 'Something went wrong.')
        console.error('Ошибка:', result.errors)
      }
    } catch (error) {
      setError('Network error occurred.')
      console.error('Сетевая ошибка:', error)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.title}>Create new article</h3>

          <label>
            <p className={styles.inputName}>Title</p>
            <input
              className={styles.input}
              placeholder="Title"
              {...register('title', { required: true })}
            />
            {errors.title && <p className={styles.error}>Title is required</p>}
          </label>

          <label>
            <p className={styles.inputName}>Short description</p>
            <input
              className={styles.input}
              placeholder="Short description"
              {...register('description', { required: true })}
            />
            {errors.description && (
              <p className={styles.error}>Description is required</p>
            )}
          </label>

          <label>
            <p className={styles.inputName}>Text</p>
            <textarea
              className={styles.textarea}
              placeholder="Text"
              {...register('body', { required: true })}
            />
          </label>
          {errors.body && <p className={styles.error}>Text is required</p>}
          <div className={styles.tagsMenu}>
            <p className={styles.inputName}>Tags</p>
            {fields.map((field, index) => (
              <div key={field.id} className={styles.tagCreate}>
                <div>
                  {' '}
                  <input
                    className={styles.inputTag}
                    placeholder="Tag"
                    {...register(`tagList.${index}`, { required: true })}
                  />
                  {errors.tagList?.[index] && (
                    <p className={styles.error}>Tag is required</p>
                  )}
                </div>
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonDelete}`}
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  Delete
                </button>
                {index === fields.length - 1 && (
                  <button
                    type="button"
                    className={`${styles.button} ${styles.buttonAdd}`}
                    onClick={() => append('')}
                  >
                    Add tag
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.formButton}>
              Send
            </button>
            {error && (
              <p className={`${styles.errorMessage} ${styles.message}`}>
                {error}
              </p>
            )}
            {message && (
              <>
                <p
                  className={`${styles.successfullyMessage} ${styles.message}`}
                >
                  {message}
                </p>
                <Link to={'/'}>
                  <button
                    type="button"
                    className={`${styles.formButton} ${styles.goHomeButton}`}
                  >
                    Go to home
                  </button>
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
