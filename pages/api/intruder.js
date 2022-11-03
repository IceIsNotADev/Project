import location from "../../public/location.json";

const fs = require('fs');

export default function intruder(req, res) {
    if (req.query.usagekey === process.env.special_key && req.method === "POST") {
        fs.writeFile('public/location.json', `{"location" : ${req.headers.locat}}`, (err) => {
            res.status(400).json({message: "An error has occurred while trying to update the location."})
        })
        res.status(200).json({message: "Location updated"});
    }
    if (req.method === "GET") {
        res.status(200).json(location.location);
    } else {
        res.status(404).json({message: "You cannot perform this action on this endpoint"});
    }
}