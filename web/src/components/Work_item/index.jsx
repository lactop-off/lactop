import styles from '/src/components/Work_item/Work_item.module.css'



export default function Work_item(props) {
    console.log(props.tags)
    return (
        <div>
            <a href={props.url} target="_blank">
                <img className={styles.link_img} src={props.img} alt="Logo" />
            </a>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.tags}>
                <ul className={styles.tags_ul}>
                    {props.tags.map(item => {
                        return (
                            <li className={styles.tags_li} key={item}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}