const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});

export default function handler(req, res) {
    if(req.method == "post"){
        const data = {
            from: req.body.from,
            to: 'mfnemo502@gmail.com',
            subject: req.body.name,
            text: req.body.message
        };
        mg.messages().send(data, function (error, body) {
            if(error){
                console.log(error)
                res.status(500).send(error)
            }else{
                console.log(body);
                res.status(200).send("success")
            }
        });
    }else{
        res.status(405).send("Method not allowed")
    }
}
