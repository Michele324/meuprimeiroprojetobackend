const express = require("express")
const router = express.Router()
const app = express()


const porta =3333
function mostraOlá(request,response) {
 response.send("Olá,mundo!") 
 
}
function mostraporta() {
console.log('servidor criado e rodando na porta',porta)
}
app.user(router.get(`/olá`,mostraOlá))
app.listen(porta,mostraporta)