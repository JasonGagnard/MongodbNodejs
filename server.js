//on va pouvoir écrire du code
import express from "express" ;
import route from "./router.js" ;
import { connect } from "mongoose";

connect("mongodb+srv://jasgagnard:qhQj6OpF5RcSPZ72@cluster0.ubyud2g.mongodb.net/paris")

.then(function(){
    console.log("connexion réussi")
})
.catch(function(){
    console.log(new Error(err))
})


const app = express();
const PORT = 1235 ; 

app.use(express.json());

app.use(route) ;
//créer 2 fichier en +
//fichier model.js => ajouter des model / schema
//router.js => app.get(...)

app.listen(PORT ,function(){
    console.log(`serveur express écoute sur le port ${PORT}`)
})
//créer un serveur qui écoute sur l'adresse http://localhost:1235