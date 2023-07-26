import { useRouter } from 'next/router'
import { useRef } from "react";
import styles from '/src/styles/form.module.css'

export default function Form() {

    const enterpriseRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const massageRef = useRef(null);

    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(nameRef.current?.value)

        let data = {
            enterprise: enterpriseRef.current?.value,
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            massage: massageRef.current?.value,
        }

        await fetch("api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                alert("メール送信成功")
                router.replace('/')
            }
        });
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={(e) => handleSubmit(e)} action="/Contact_comp">
                <div className={styles.contents}>
                    <label htmlFor="enterprise">企業名</label>
                    <input className={styles.Form_Item_Input} id="enterprise" name="enterprise" type="enterprise" placeholder="令和株式会社" ref={enterpriseRef} />
                </div>
                <div className={styles.contents}>
                    <label htmlFor="name">お名前<span className={styles.label_required}>*</span></label>
                    <input className={styles.Form_Item_Input} id="name" name="name" type="name" placeholder="田中太郎" required ref={nameRef} />
                </div>
                <div className={styles.contents}>
                    <label htmlFor="email">メールアドレス<span className={styles.label_required}>*</span></label>
                    <input className={styles.Form_Item_Input} id="email" name="email" type="email" placeholder="email@example.com" required ref={emailRef} />
                </div>
                <div className={styles.contents}>
                    <label htmlFor="phone">電話番号</label>
                    <input className={styles.Form_Item_Input} id="phone" name="phone" type="phone" placeholder="080-XXXX-XXXX" ref={phoneRef} />
                </div>
                <div className={styles.contents}>
                    <label htmlFor="message" className="form-label">問合せ内容<span className={styles.label_required}>*</span></label>
                    <textarea className={styles.Form_Item_Textarea} id="message" name="message" rows="10" required ref={massageRef} ></textarea>
                </div>
                <div>
                    <button className={styles.Form_Btn} type="submit">送信</button>
                </div>
            </form>
        </div>
    )
}