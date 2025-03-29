const express = require("express");
const app = express();

// Servir archivos estáticos desde la carpeta public para VERCEL
app.use("/public", express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ruta para obtener gatos directamente
app.get("/cat/:code", (req, res) => {
  const code = req.params.code;
  res.redirect(`https://http.cat/${code}`);
});

// Ruta para cualquier otro recurso
app.get("/*", (req, res) => {
  res
    .status(404)
    .send(
      "<div class='container-error' style='display: flex; align-items: center; flex-direction: column;'><h1>404 Not Found</h1><img src='https://http.cat/404' alt='404'></div>"
    );
});

// Vercel usa el puerto que le asigna
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
