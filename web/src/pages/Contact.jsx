import Head from 'next/head'
import styles from '/src/styles/Contact.module.css'
import Header from '/src/components/Header'
import Form from '/src/pages/form'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className={styles.title}><p><span className={styles.title_head}>C</span>ontact</p></div>
      <Form></Form>
    </div>
  )
}
