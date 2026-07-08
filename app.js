const express = require("express");
const path = require("path");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// API
app.use("/usuarios", userRoutes);

module.exports = app;