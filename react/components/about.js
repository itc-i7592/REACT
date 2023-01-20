import Hero from 'components/hero'
import styles from 'styles/news.module.css'

export default function About(){ 
  return ( 
    <>
	<div className={styles.box}>
	  <h1 className={styles.h1}>Prop Times</h1>

	  <h2 className={styles.h2}>Headline</h2>
	  <h3 className={styles.h3}>Article 1</h3>
	  <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
	  <h3 className={styles.h3}>Article 2</h3> 
	  <p>sentence comes here sentence comes here sentence comes here sentence comes here</p>
	</div>
    </>
  )
}

