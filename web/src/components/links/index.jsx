import styles from '/src/components/links/links.module.css'


export default function links() {
    return (
        <div className={styles.links}>
            <a target="_blank" href="https://twitter.com/lactop_official" ><img className={styles.icon} src="/icon_twitter.svg" alt="Twitter" /></a>
            <a target="_blank" href="https://github.com/lactop-off"><img className={styles.icon} src="/icon_github.svg" alt="Github" /></a>
        </div>
    )
}
