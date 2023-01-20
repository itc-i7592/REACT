import Link from 'next/link'
import style from 'styles/nav.module.css'

export default function Footer () {
  return (
    <footer>
      <nav>
        <ul>
          <li className={style.li}>
            <Link href='/'>
              <p className={style.p}>Home</p>
            </Link>
          </li>
          <li>
            <Link href='/page1'>
              About
            </Link>
          </li>
          <li>
            <Link href='/page2'>
              News
            </Link>
          </li>
          <li>
            <Link href='/page3'>
              Map
            </Link>
          </li>
          <li>
            <Link href='/page4'>
              Help
            </Link>
          </li>
          <li>
            <Link href='/page5'>
              Menu
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
