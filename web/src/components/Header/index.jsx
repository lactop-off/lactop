import Head from 'next/head'
import styles from '/src/components/Header/Header.module.css'


export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>

        {/* ロゴ */}
        <div className={styles.logo}>
          <a href="/">
            <p className={styles.logoname1}>Lactop.</p>
          </a>
        </div>

        {/* メニュー */}
        <menu className={styles.menu}>
          <ul className={styles.menu_ul}>
            <li><a href="/About" className={styles.a}>About</a></li>
            <li><a href="/Works" className={styles.a}>Works</a></li>
            <li><a href="/Skill" className={styles.a}>Skill</a></li>
            <li><a href="/Contact" className={styles.a}>Contact</a></li>
          </ul>
        </menu>
      </div>
    </div>
  )
}
