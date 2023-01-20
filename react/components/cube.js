import Hero from 'components/hero'
import styles from 'styles/help.module.css'

export default function Cube () {
  return (
    <>
      <div className={styles.pc}>
        <div className={styles.pc_head}>
          <div className={styles.desplay_outer}>
            <div className={styles.display_inner} />
            <div className={styles.camera} />
          </div>
        </div>
        <div className={styles.pc_body}>
          <div className={styles.body_inner}>
            <div className={styles.hollow} />
          </div>
        </div>
      </div>
    </>
  )
}
