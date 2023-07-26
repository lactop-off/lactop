import Head from 'next/head'
import styles from '/src/styles/Skill.module.css'
import Header from '/src/components/Header'

export default function Skill() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className={styles.title}><p><span className={styles.title_head}>S</span>kill</p></div>
      <img src="/skillmap.png" alt="skillmap" className={styles.maps} />
    </div>
  )
}
