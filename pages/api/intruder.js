import location from "../../public/location.json";
const fs = require('fs');
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');
let last = "h";
let current = 0;


export default async function intruder(req, res) {
    const {locat} = req.headers;
    if (req.query.usagekey === process.env.special_key && req.method === "POST") {
        if(last !== "h"){
            last = current;
            await client.records.delete('current', last);
        }
        current = await client.records.create('current', locat);
        fs.writeFileSync('public/location.json', `{"location" : ${locat.toString()}}`, function (err) {
            return res.status(400).json({message: "failed"})
        });
        return res.status(200).json({message: "Location updated"});
    }
    if (req.method === "GET") {
        return res.status(200).json(location.location);
    } else {
        return res.status(404).json({message: "You cannot perform this action on this endpoint"});
    }
}