const express = require("express");
const path = require("path");
const expHbs = require("express-handlebars");
const discosJson = require("./discos.json");
const { get } = require("http");
const app = express();
const PORT = 3456;

/*** Configuración de Handlebars para Express ***/
app.engine("handlebars",
    expHbs({
        defaultLayout: "main-layouts",
        layoutsDir: "views/layouts"
    })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
/************************************************/

// Carpeta de recursos estáticos
app.use(express.static(path.join(__dirname, "client")));

// Ruta inicial 
app.get("/", (req, res)=>{
    res.render("bienvenida", {
        titulo: "Busqueda de discos"
    })
});

// Ruta /buscar filtra los resultados
app.get("/buscar", (req, res)=>{
    let resultados =  discosJson.discos;
    let qTitulo = req.query.titulo;
    let qArtista = req.query.artista;
    let qLanzamiento = req.query.lanzamiento;

    // Busqueda de los discos
    if (qTitulo) {
        resultados = resultados.filter(elemento =>{
            return elemento.titulo.toLowerCase().includes(qTitulo.toLowerCase());
        });
    }
    if (qArtista) {
        resultados = resultados.filter( elemento =>{
            return elemento.artista.toLowerCase().includes(qArtista.toLowerCase());
        });        
    }
    if (qLanzamiento) {
        resultados = resultados.filter(elemento =>{
            return elemento.lanzamiento == qLanzamiento;
        });
    }

    // Armo un texto para el resultado
    const textoResultados = `Hay ${resultados.length} resultado${resultados.length === 1 ? "" : "s"} para tu consulta`;

    // Renderizo la vista "cards" con esos datos
    res.render("cards",{
        titulo: "Búsqueda de discos",
        textoResultado: textoResultados,
        resDiscos: resultados,
    })
});

app.listen(PORT, ()=> console.log(`Escuchando en puerto ${PORT}`));