import styles from 'styles/Sample.module.css'
export default function Hero () {
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1 className={styles.h1}>Sample Website</h1>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.h2}>Heading</h2>
        <p className={styles.p}>Content comes here. Content comes here. Content comes here.
          <br />Content comes here. Content comes here. Content comes here.
        </p>
        <h2 className={styles.h2}>Heading2</h2>
        <p className={styles.p}>Content comes here. Content comes here. Content comes here.
          <br />Content comes here. Content comes here. Content comes here.
        </p>
      </main>

      <footer>
        <div className={styles.footer}>
          <p className={styles.p}>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
