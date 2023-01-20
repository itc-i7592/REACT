import Hero from 'components/hero'
import style from 'styles/map.module.css'

export default function Blog () {
  return (
    <>
      <div className={style.box}>
        <h1>Prep Mart</h1>
        <ul className={style.col_3}>
          <li>
            <h2 className={style.meat}>Meat</h2>
            <ul className={style.menu}>
              <li>Beef</li>
              <li>Chicken</li>
              <li>Other</li>
            </ul>
          </li>
          <li>
            <h2 className={style.fish}>Fish</h2>
            <ul className={style.menu}>
              <li>Tuna</li>
              <li>Shrimp</li>
              <li>Other</li>
            </ul>
          </li>
          <li>
            <h2 className={style.vegetable}>Vegetable</h2>
            <ul className={style.menu}>
              <li>Tomato</li>
              <li>Lettuce</li>
              <li>Other</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
