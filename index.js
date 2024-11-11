import express from "express";
import pkg from 'pg';
const { Client } = pkg;

const PORT = process.env.PORT;

const dbConfig = {
  host: process.env.DB_HOST ,
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

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
