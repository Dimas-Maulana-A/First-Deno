import express from "npm:express@4.18.2";
import Data from "./database/database.ts";

const app = express();

app.get("/", (req: any, res: { json: (arg0: { data: { name: string; description: string; status: boolean; }[]; }) => void; })=> {
    res.json({
        data: Data
    })
})

app.listen(8000);
