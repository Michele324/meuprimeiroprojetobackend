const express = require("express")
const router = Router()
const app = express()


const porta =3333
const mulheres = {
    nome:'Luana Michele',
    imagem:'c:\Users\User\Downloads\ai-generated-ge704418bc_1280.jpg',
    minibio:'Estudante e Desenvolvedora',
},
let genifer = {
    nome: 'Genifer ferreira',
    imagem:'c:\\Users\\User\\Downloads\\mulher-jovem-engracada-na-frente-de-uma-tela-de-laptop-no-escritorio (1).jpg',
    minibio: 'desenvolvedora e instrutora'
},


function mostraMulheres(request,response){
response.jsom(mulheres)
}

function mostraporta() {
console.log('servidor criado e rodando na porta',porta)
}

app.(router.get('/mulheres',mostramulheres))
app.listen(porta,mostraporta)