const express = require("express");
const router = express.Router();
const app = express();


const porta =3333

function mostraMulher(require, response) {
response.json({
    nome:'Luana Michele',
    imagem: 'c:\Users\User\Downloads\ai-generated-ge704418bc_1280.jpg',
    minibio:'Estudante e Desenvolvedora'
})
}

function mostraporta() {
console.log('servidor criado e rodando na porta',porta)
}
app.use(router.get('/mulher',mostraMulher))
app.listen(porta,mostraporta)
