import Link from 'next/link'

export default function Home () {
  return (
    <>
      <ul>
        <li>
          <h2><a href='/'>Home</a></h2>
        </li>
        <li>
          <h2><a href='/about'>Webページ</a></h2>
        </li>
        <li>
          <h2><a href='/blog'>新聞</a></h2>
        </li>
        <li>
          <h2><a href='/cube'>３段組</a></h2>
        </li>
        <li>
          <h2><a href='/hero'>PC</a></h2>
        </li>
        <li>
          <h2><a href='/nav'>ポップ</a></h2>
        </li>
      </ul>

    </>
  )
}
