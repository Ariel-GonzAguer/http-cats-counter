const express = require("express");
const app = express();
const path = require("path");

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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
