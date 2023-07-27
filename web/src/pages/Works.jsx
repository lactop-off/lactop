import Head from 'next/head'
import styles from '/src/styles/About.module.css'
import Header from '/src/components/Header'
import Work_item from '/src/components/Work_item'

export default function Works() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.title_box}>
            <div className={styles.title}><p><span className={styles.title_head}>W</span>orks</p></div>
          </div>
          <div className={styles.discription}>
            <div>
              <Work_item
                title="アーバンオート福岡"
                url="https://urbanauto-fukuoka.com/"
                img="/urbanautofukuoka.png"
                tags={["Html", "css", "Javascript", "JQuery", "PHP", "Python"]}
              >
              </Work_item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
