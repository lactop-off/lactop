import Head from 'next/head'
import styles from '/src/styles/Contact.module.css'
import Header from '/src/components/Header'

export default function Contact_comp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className={styles.title}><p><span className={styles.title_head}>C</span>ontact</p></div>
      <div>
        <p className={styles.comp_msg}>送信が完了いたしました。</p>
      </div>
    </div>
  )
}
