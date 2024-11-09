require("dotenv").config();
const express = require("express");
const { Client } = require("pg");

const PORT = process.env.PORT;
const HOST = "0.0.0.0";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const client = new Client(dbConfig);
const app = express();

client
  .connect()
  .then(() => console.log("Conectado ao banco de dados PostgreSQL!"))
  .catch((err) => console.error("Erro ao conectar ao PostgreSQL:", err.stack));

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/data", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Erro ao consultar banco de dados!");
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
