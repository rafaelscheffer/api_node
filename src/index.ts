import express from "express";
import { config } from "dotenv";

const main = async () => {
    config();
    const app = express();
    const port = process.env.PORT || 9000;

    app.get("/", (req, res) => {
      res.send("teste");
    });
    app.listen(port, () => console.log(`listening on port ${port}!`));
}

main();