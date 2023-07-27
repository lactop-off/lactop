import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    });

    // 管理人側が受け取るメール
    const toHostMailData = {
        from: req.body.email,
        to: "lactop.official@gmail.com",
        subject: `[お問い合わせ]: lactopホームページにお問い合わせがありました。`,
        text: `${req.body.message} Send from ${req.body.email}`,
        html: `
            <p>【企業名】</p>
            <p>${req.body.enterprise}</p>
            <p>【名前】</p>
            <p>${req.body.name}</p>
            <p>【メールアドレス】</p>
            <p>${req.body.email}</p>
            <p>【電話番号】</p>
            <p>${req.body.phone}</p>
            <p>【メッセージ内容】</p>
            <p>${req.body.massage}</p>
        `,
    };

    transporter.sendMail(toHostMailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info)
    });

    return res.send("成功しました。")
}