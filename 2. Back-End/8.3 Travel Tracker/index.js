import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import 'dotenv/config';

const app = express();
const port = 3000;

const dbPassword = process.env.DB_PASS;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: dbPassword,
  port: 5432,
});

db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code from visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", {countries: countries, total: countries.length});
});

app.post("/add", (res, req) => {
  
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
