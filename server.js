const express = require("express");
const app = express(); //instanciando o express

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    { title: "D", message: "esenvolver aplicaçoes" },
    { title: "E", message: "JS usa javascript para renderizar HTML" },
    { title: "M", message: "uito fácil" },
    { title: "A", message: "mazing" },
    { title: "I", message: "squece" },
    { title: "S", message: "ensacional" },
  ];

  const subtitle =
    "Uma lingaugem de modelagem para criaçao de paginas HTML utilizando JavaScript";

  res.render("pages/index", { qualitys: items, subtitle: subtitle });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("rodando");
