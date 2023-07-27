import Head from 'next/head'
import Links from '/src/components/links'
import styles from '/src/styles/Home.module.css'
import top_style from '/src/components/Top/Top.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lactop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={top_style.circle_1}>
        a
      </div>
      <Links />
      <div className={top_style.circle_2}>
      </div>
      <img className={top_style.logo} src="/icon_offback.png" alt="Logo" />

      {/* タイトル */}
      <div className={styles.title_box}>
        <h1 className={styles.title}>
          <a href="#">lactop.</a>
        </h1>
      </div>

      {/* メニュー */}
      <main className={styles.main}>
        <menu>
          <ul className={styles.menu}>
            <li><a href="/About" className={styles.menu_item}>About</a></li>
            <li><a href="/Works" className={styles.menu_item}>Works</a></li>
            <li><a href="/Skill" className={styles.menu_item}>Skill</a></li>
            <li><a href="/Contact" className={styles.menu_item}>Contact</a></li>
          </ul>
        </menu>
      </main>

    </div>
  )
}
