import location from "../../public/location.json";

const fs = require('fs');

export default function intruder(req, res) {
    const {locat} = req.headers;
    if (req.query.usagekey === process.env.special_key && req.method === "POST") {
        console.log(locat);
        fs.writeFile('public/location.json', `{"location" : ${locat}}`, function (err) {res.status(400).json({ error: err })});
        res.status(200).json({message: "Location updated"});
    }
    if (req.method === "GET") {
        res.status(200).json(location.location);
    } else {
        res.status(404).json({message: "You cannot perform this action on this endpoint"});
    }
}