import Hero from 'components/hero'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <>
      <ul className={styles.pop_btn}>
        <li>
          <h2><a href='#'>Home</a></h2>
        </li>
        <li>
          <h2><a href='#'>About</a></h2>
        </li>
        <li>
          <h2><a href='#'>Topics</a></h2>
        </li>
        <li>
          <h2><a href='#'>Link</a></h2>
        </li>
      </ul>
    </>
  )
}
