import { useForm, useFieldArray } from 'react-hook-form'
import { useEffect, useState } from 'react'
import styles from './CreateArticle.module.scss'

export default function CreateArticle() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { register, control, handleSubmit } = useForm({
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
          </label>

          <label>
            <p className={styles.inputName}>Short description</p>
            <input
              className={styles.input}
              placeholder="Short description"
              {...register('description', { required: true })}
            />
          </label>

          <label>
            <p className={styles.inputName}>Text</p>
            <textarea
              className={styles.textarea}
              placeholder="Text"
              {...register('body', { required: true })}
            />
          </label>

          <div className={styles.tagsMenu}>
            <p className={styles.inputName}>Tags</p>
            {fields.map((field, index) => (
              <div key={field.id} className={styles.tagCreate}>
                <input
                  className={styles.inputTag}
                  placeholder="Tag"
                  {...register(`tagList.${index}`)}
                />
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
              <p className={`${styles.successfullyMessage} ${styles.message}`}>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
