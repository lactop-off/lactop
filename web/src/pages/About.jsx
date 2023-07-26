import Head from 'next/head'
import styles from '/src/styles/About.module.css'
import Header from '/src/components/Header'


export default function About() {
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
            <div className={styles.title}><p><span className={styles.title_head}>A</span>bout</p></div>
            <img className={styles.logo} src="/icon_offback.png" alt="Logo" />
          </div>
          <div className={styles.discription}>
            <div>
              <p>福岡にてWeb制作およびアプリケーションの開発をやっております</p>
              <p>2020年自社開発IT系企業の開発部門にバックエンドエンジニアとして入社</p>
              <p>下流工程から上流工程まで開発を行い、設計と実装の経験を積む</p>
              <p>2022年新規事業部にてプロダクトオーナーとしてプロジェクトを牽引</p>
              <p>マーケティングから開発まで幅広く対応し、</p>
              <p>プロジェクトスコープを見定めながら開発を行えるようになる</p>
            </div>
            <div>
              <p>所在地：　　　　　福岡県</p>
              <p>お問い合わせ：　　lactop.official@gmail.com</p>
              <p>事業内容：　　　　Webアプリケーション開発、Webサイト制作</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
